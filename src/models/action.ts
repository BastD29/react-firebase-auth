// import { SET_USER } from "../constants/actions";
// import { UserType } from "./user";

// type SetUserActionType = { type: typeof SET_USER; payload: UserType };
// type UserActionType = SetUserActionType;

// export type { UserActionType };

import { LOGIN, LOGOUT, SIGNUP } from "../constants/actions";
import { UserType } from "./user";

type LoginActionType = { type: typeof LOGIN; payload: UserType };
type SignupActionType = { type: typeof SIGNUP; payload: UserType };
type LogoutActionType = { type: typeof LOGOUT };

type AuthActionType = SignupActionType | LoginActionType | LogoutActionType;

export type { AuthActionType };
