import { FC, useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { LOGIN } from "../../constants/actions";
import { useNavigate } from "react-router-dom";
import style from "./SignIn.module.scss";

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { dispatch, state } = useAuthContext();
  const navigate = useNavigate();

  // prevents access to SignIn page if user is already logged in
  useEffect(() => {
    if (state.user) {
      navigate("/dashboard");
    }
  }, [state.user, navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: LOGIN, payload: userCredential.user });
      navigate("/dashboard");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <form className={style["signin"]} onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      {error && <p className={style["error"]}>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
