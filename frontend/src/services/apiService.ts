import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { authService } from "./authService";
import { urls } from "../constants/urls";
import router from "../router";

const apiService = axios.create({ baseURL: '/api' });

let isRefreshing = false;
type IWaitList = () => void;
const waitList: IWaitList[] = [];

apiService.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
}, error => Promise.reject(error));

apiService.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig | undefined;

        if (!originalRequest || !error.response || error.response.status !== 401) {
            return Promise.reject(error);
        }

        if (originalRequest.url === urls.auth.refresh) {
            return Promise.reject(error);
        }

        if (!isRefreshing) {
            isRefreshing = true;
            try {
                await authService.refresh();
                runAfterRefresh();
                isRefreshing = false;
                return apiService(originalRequest);
            } catch (e) {
                authService.deleteTokens();
                isRefreshing = false;
                await router.navigate('/login?sessionExpired=true');
                return Promise.reject(error);
            }
        }

        return new Promise(resolve => {
            subscribeToWaitList(() => {
                if (originalRequest) {
                    resolve(apiService(originalRequest));
                }
            });
        });
    }
);

const subscribeToWaitList = (cb: IWaitList): void => {
    waitList.push(cb);
};

const runAfterRefresh = (): void => {
    while (waitList.length) {
        const cb = waitList.pop();
        if (cb) cb();
    }
};

export { apiService };
