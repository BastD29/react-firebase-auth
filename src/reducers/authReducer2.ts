import { LOGIN, LOGOUT } from "../constants/actions";
import { AuthActionType } from "../models/action";
import { AuthType } from "../models/auth2";

const initialAuthState: AuthType = {
  user: undefined,
  loading: true,
};

const authReducer = (state: AuthType, action: AuthActionType): AuthType => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload, loading: false };
    case LOGOUT:
      return { ...state, user: undefined, loading: false };
    default:
      return state;
  }
};

export { authReducer, initialAuthState };
