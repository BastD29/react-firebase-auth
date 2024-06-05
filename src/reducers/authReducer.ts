import { LOGIN, LOGOUT /* SIGNUP */ } from "../constants/actions";
import { AuthActionType } from "../models/action";
import { AuthType } from "../models/auth";

const initialAuthState: AuthType = {
  user: undefined,
};

const authReducer = (state: AuthType, action: AuthActionType): AuthType => {
  switch (action.type) {
    // * no need of SIGN_UP: in Firebase, login action can be used to handle both login and signup actions
    // * when user signs up successfully, he is immediately logged in, and the state is updated
    // * This approach simplifies the reducer logic by reducing redundancy.
    // case SIGNUP:
    //   return { ...state, user: action.payload };
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: undefined };
    default:
      return state;
  }
};

export { authReducer, initialAuthState };
