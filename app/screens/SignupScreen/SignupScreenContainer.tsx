import React from "react";
import SignupScreenView from "./SignupScreenView";

interface Props {}


const SignupScreenContainer = () => {
  return <SignupScreenView />;
};

SignupScreenContainer.options = {
  topBar: {
    title: {
      text: 'Registrati',
    },
  }
}

export default SignupScreenContainer;
