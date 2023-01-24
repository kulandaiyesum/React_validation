import React, { useState, useEffect } from "react";

export const LogIn = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formValues);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    if (!values.email.trim()) {
      errors.email = "Email required";
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password.trim()) {
      errors.password = "Password required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    
    return errors;
  };

  return (
    <div className="form-container">
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <h1>Log In</h1>
      <form className="login-form" onSubmit={handleSubmint}>
        <label htmlFor="email">Enter email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.pass}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        <button type="submit">Log In</button>
      </form>
      <button
        onClick={() => props.onFormSwitch("register")}
        className="link-btn"
      >
        Don't have account? Register here.
      </button>
    </div>
  );
};
