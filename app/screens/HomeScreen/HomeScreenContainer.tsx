import React from "react";
import HomeScreenView from "./HomeScreenView";

interface Props {}


const HomeScreenContainer = (props) => {
  return <HomeScreenView {...props} />;
};
HomeScreenContainer.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
};

export default HomeScreenContainer;
