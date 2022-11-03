import React from "react";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IAuth {
  user: IUser;
  logout: () => void;
}
export const AuthContext = React.createContext<IAuth | null>(null);
