import React, { useState } from "react";

export const Register = (props) => {
  const[values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: ""
  });

  const[errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  

  const validation = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "Username required";
    }
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
    if (!values.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password requierd";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password do not match";
    }
    if(!values.phoneNo.trim()){
      errors.phoneNo = "Pone number is required!";
    }else if (!values.phoneNo.length === 10) {
      errors.phoneNo = "phone number must be 10 digits";
    }
    return errors;
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form className="register-form" onClick={handleSubmint}>
        <label htmlFor="name">Enter name</label>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          name="name"
          id="name"
          placeholder="full name"
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          name="email"
          id="email"
          placeholder="abc@gmail.com"
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          name="password"
          id="password"
          placeholder="********"
        />
        {errors.password && <p>{errors.password}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="********"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <label htmlFor="phNo">Phone Number</label>
        <input
          type="tel"
          value={values.phoneNo}
          onChange={handleChange}
          name="phoneNo"
          id="phNo"
          placeholder="1234567890"
        />
        {errors.phoneNo && <p>{errors.phoneNo}</p>}
        <button type="submit">Register</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")} className="link-btn">
        Already have account? Login here.
      </button>
    </div>
  );
};