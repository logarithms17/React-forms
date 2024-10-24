import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const { email, password } = enteredValues;

  const enterInvalidEmail = didEdit.email && !email.includes("@");
  const enterInvalidPassowrd = didEdit.password && password.trim().length < 6;

  const handleInputBlur = (identifier) => {
    //when the input lost its focus this will trigger
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    setEnteredValues({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (identifier, event) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));

    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")} //when input loses focus
          onChange={(event) => handleInputChange("email", event)}
          value={email}
          error={enterInvalidEmail && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")} //when input loses focus
          onChange={(event) => handleInputChange("password", event)}
          error={enterInvalidPassowrd && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
