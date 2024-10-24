import { useState } from "react";

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

  const enterValidEmail = didEdit.email && !email.includes("@");

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onBlur={() => handleInputBlur("email")} //when input loses focus
            name="email"
            onChange={(event) => handleInputChange("email", event)}
            value={enteredValues.email}
          />
          {enterValidEmail && (
            <p className="control-error">Please enter a valid email address.</p>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
