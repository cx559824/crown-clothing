import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.scss'

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ [name]: value });
  };

  return (
    <div className="sign-in" onSubmit={(e) => handleSubmit(e)}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <label>Email</label>
        <FormInput name="email" type="email" value={setCredentials.email} handleChange={(e) => handleChange(e)} label={setCredentials.email} required />
        <label>Password</label>
        <FormInput
          name="password"
          type="password"
          value={setCredentials.password}
          handleChange={(e) => handleChange(e)}
          label={setCredentials.password}
          required
        /> 
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
