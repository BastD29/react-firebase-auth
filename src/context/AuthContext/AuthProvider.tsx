import { FC, ReactNode, useEffect, useReducer } from "react";
import { authReducer, initialAuthState } from "../../reducers/authReducer2";
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { LOGIN, LOGOUT } from "../../constants/actions";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user:", user);

      if (user) {
        dispatch({ type: LOGIN, payload: user });
      } else {
        dispatch({ type: LOGOUT });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
