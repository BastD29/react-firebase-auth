import { FC, FormEvent, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { LOGIN } from "../../constants/actions";
import { useNavigate } from "react-router-dom";
import style from "./SignUp.module.scss";

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: LOGIN, payload: userCredential.user });
      navigate("/dashboard");
    } catch (error) {
      setError("User already exists");
      console.error(error);
    }
  };

  return (
    <form className={style["signup"]} onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
