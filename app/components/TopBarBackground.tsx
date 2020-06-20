import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    height: '80%',
    width: '80%',
    maxHeight: 120,
    maxWidth: 120,
    resizeMode: 'contain',
  },
});

const TopBarBackground = (props) => {
  // ••• local variables •••

  // ••• navigation variables •••

  // ••• state variables & methods •••

  // ••• refs variables •••

  // ••• useSelector methods •••

  // ••• working methods •••

  // ••• render methods •••

  // ••• useEffect methods •••
  return (
    <>
      <Image
        source={require('../assets/images/header-image1.png')}
        style={[styles.image, {top: 0, right: '25%'}]}
      />
      <Image
        source={require('../assets/images/header-image2.png')}
        style={[styles.image, {bottom: 0, right: 0}]}
      />
    </>
  );
};

export default TopBarBackground;
