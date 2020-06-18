import React, {useEffect} from 'react';
import {Image, StyleSheet, TextStyle} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Text as RNText} from 'react-native';
import {COLORS, FONT_FAMILIES, FONT_SIZES} from '../data/ThemeConstants';

interface Props {
  style: TextStyle;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  s?: boolean;
  size?: number;
  color?: string;
  black?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  extraLight?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  thin?: boolean;
  regular?: boolean;
  italic?: boolean;
  center?: boolean;
  uppercase?: boolean;
  underline?: boolean;
}

const styles = StyleSheet.create({});

const Text = ({
  style,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  s,
  size,
  color,
  black,
  bold,
  extraBold,
  extraLight,
  light,
  medium,
  regular,
  semiBold,
  thin,
  italic,
  center,
  uppercase,
  underline,
  children,
  ...rest
}) => {
  // ••• local variables •••

  // ••• navigation variables •••

  // ••• state variables & methods •••

  // ••• refs variables •••

  // ••• useSelector methods •••

  // ••• working methods •••

  // ••• render methods •••

  // ••• useEffect methods •••

  const textStyle = StyleSheet.flatten<TextStyle>([
    h1 && {fontSize: FONT_SIZES.H1},
    h2 && {fontSize: FONT_SIZES.H2},
    h3 && {fontSize: FONT_SIZES.H3},
    h4 && {fontSize: FONT_SIZES.H4},
    h5 && {fontSize: FONT_SIZES.H5},
    p && {fontSize: FONT_SIZES.P},
    s && {fontSize: FONT_SIZES.S},
    !!size && {fontSize: size},
    !!color && {color},
    black && {fontFamily: FONT_FAMILIES.BLACK},
    bold && {fontFamily: FONT_FAMILIES.BOLD},
    extraBold && {fontFamily: FONT_FAMILIES.EXTRA_BOLD},
    extraLight && {fontFamily: FONT_FAMILIES.EXTRA_LIGHT},
    light && {fontFamily: FONT_FAMILIES.LIGHT},
    medium && {fontFamily: FONT_FAMILIES.MEDIUM},
    regular && {fontFamily: FONT_FAMILIES.REGULAR},
    semiBold && {fontFamily: FONT_FAMILIES.SEMI_BOLD},
    thin && {fontFamily: FONT_FAMILIES.THIN},
    center && {textAlign: 'center'},
    uppercase && {textTransform: 'uppercase'},
    underline && {textDecorationLine: 'underline'},
    style && style,
  ]);

  return (
    <RNText
      style={[
        {
          fontFamily: FONT_FAMILIES.MEDIUM,
          color: COLORS.DARK,
          fontSize: FONT_SIZES.P,
        },
        textStyle,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
