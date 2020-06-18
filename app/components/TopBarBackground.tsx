import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

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
  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', 'componentDidAppear');
      },
      componentDidDisappear: () => {
        console.log('RNN', 'componentDidDisappear');
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      props.componentId,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, []);

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
