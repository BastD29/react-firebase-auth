import { Context, Dispatch, createContext } from "react";
import { AuthType } from "../../models/auth";
import { AuthActionType } from "../../models/action";

type AuthContextType = {
  state: AuthType;
  dispatch: Dispatch<AuthActionType>;
};

export const AuthContext: Context<AuthContextType | undefined> = createContext<
  AuthContextType | undefined
>(undefined);
