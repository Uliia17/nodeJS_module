import { RoleEnum } from "../enums/role.enum";
import { IBase } from "./base.interface";

interface IUser extends IBase {
  _id: string;
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  role: RoleEnum;
  isDeleted: boolean;
  isVerified: boolean;
}

type IUserCreateDTO = Pick<
  IUser,
  "name" | "surname" | "age" | "email" | "password"
>;

type IUserUpdateDTO = Pick<IUser, "name" | "surname" | "age">;

export type { IUser, IUserCreateDTO, IUserUpdateDTO };
