import React from "react";

export interface IUser {
  name: string;
  email: string;
  password?: string;
}

export interface IAuth {
  user: IUser;
  logout: () => void;
  createUser?: (user: IUser) => void;
}
export const AuthContext = React.createContext<IAuth | null>(null);
