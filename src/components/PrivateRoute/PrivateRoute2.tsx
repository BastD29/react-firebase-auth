import { FC, ReactNode } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { state } = useAuthContext();

  return state.user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
