import { FC } from "react";
import { /* Navigate, */ Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import Dashboard from "../../pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute2";
import Home from "../../pages/Home/Home";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Navigate to="/signup" />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
