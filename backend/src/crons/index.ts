// import { testCron } from "./test.cron";

import { removeOldTokensCron } from "./remove-old-tokens.cron";

export const cronsRunner = async () => {
    // testCron.start();
    removeOldTokensCron.start();
};
