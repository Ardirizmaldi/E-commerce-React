import React from "react";

import "./signIn-and-signUp.component.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInSignUpContainer } from "./signin-and-signup.styles";

const SingInAndSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SingInAndSignUpPage;
