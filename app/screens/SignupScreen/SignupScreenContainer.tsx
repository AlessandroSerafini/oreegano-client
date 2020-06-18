import React from 'react';
import SignupScreenView from './SignupScreenView';
import {FONT_FAMILIES} from '../../data/ThemeConstants';

interface Props {}

const SignupScreenContainer = () => {
  return <SignupScreenView />;
};

SignupScreenContainer.options = {
  topBar: {
    title: {
      text: 'Registrati',
    },
  },
};

export default SignupScreenContainer;
