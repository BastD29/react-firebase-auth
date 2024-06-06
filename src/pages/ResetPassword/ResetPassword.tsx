import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./ResetPassword.module.scss";

// * SHOULD BE TESTED WITH AN EMAIL EXISTING IN THE DATABASE (OF A CREATED USER)

const ResetPassword: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setError(null);
      setEmail("");
      // navigate("/signin");
      setTimeout(() => navigate("/signin"), 3000);
      console.log("Email sent successfully");
    } catch (error) {
      console.error(error);
      setError("Failed to send password reset email. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <form className={style["reset-password"]} onSubmit={handleSubmit}>
      <h2>Reset password</h2>
      <p>An email will be sent to you to reset your password</p>
      {success && (
        <p className={style["success"]}>
          Email sent successfully! Please check your inbox
        </p>
      )}
      {error && <p className={style["error"]}>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
      />
      <button type="submit">Reset password</button>
      <Link to="/signin">Go back</Link>
    </form>
  );
};

export default ResetPassword;
