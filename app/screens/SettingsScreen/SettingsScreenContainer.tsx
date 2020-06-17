import React from "react";
import SettingsScreenView from "./SettingsScreenView";

interface Props {}


const SettingsScreenContainer = (props) => {
  return <SettingsScreenView {...props} />;
};
SettingsScreenContainer.options = {
  topBar: {
    title: {
      text: 'Settings'
    }
  },
  bottomTab: {
    text: 'Settings'
  }
}

export default SettingsScreenContainer;
