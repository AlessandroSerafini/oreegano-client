import React from 'react';
import {View} from 'react-native';
import {SIZES} from '../data/ThemeConstants';

interface Props {
  multiplier?: number;
  customStyles?: any;
}

const NewLine = ({multiplier = 1, customStyles}: Props) => {
  return (
    <View
      style={[
        {
          zIndex: -1,
          height: SIZES.DEFAULT_PADDING * multiplier,
          backgroundColor: 'transparent',
        },
        customStyles,
      ]}
    />
  );
};

export default NewLine;
