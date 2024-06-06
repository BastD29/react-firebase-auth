import { FC } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthContext } from "../../hooks/useAuthContext";
import { LOGOUT } from "../../constants/actions";
import style from "./Dashboard.module.scss";

const Dashboard: FC = () => {
  const { dispatch, state } = useAuthContext();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style["dashboard"]}>
      <h2>Dashboard</h2>
      {state.user && (
        <div>
          <p>Welcome, {state.user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
