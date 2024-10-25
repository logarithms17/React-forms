import Input from "./Input";
import useInput from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBLur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    if (!emailHasError && !passwordHasError) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          type="email"
          name="email"
          onBlur={handleEmailBLur} //when input loses focus
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur} //when input loses focus
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
