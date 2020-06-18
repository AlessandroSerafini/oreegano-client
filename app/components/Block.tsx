import React, {FunctionComponent} from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  fluid: {
    width: '100%',
  },
  outline: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

interface BlockProps extends ViewProps {
  row?: boolean;
  bg?: string;
  flex?: boolean | number;
  disabled?: boolean;
  center?: boolean;
  middle?: boolean;
  outline?: boolean;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  space?: string | null;
  fluid?: boolean;
  height?: number | null;
  minHeight?: number | null;
  width?: string | number | null;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  rippleOutside?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

const Block: FunctionComponent<BlockProps> = ({
  row,
  flex,
  disabled = false,
  bg,
  outline,
  center,
  rippleOutside,
  middle,
  top,
  bottom,
  right,
  left,
  space,
  fluid,
  height,
  minHeight,
  width,
  children,
  style,
  containerStyle,
  ...restProps
}) => {
  const styleBlock = StyleSheet.flatten<ViewStyle>([
    styles.block,
    row && styles.row,
    flex ? {flex: flex === true ? 1 : flex} : {},
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    // @ts-ignore
    space ? {justifyContent: `space-${space}`} : {},
    fluid && styles.fluid,
    height && {height},
    minHeight && {minHeight},
    width && {width},
    outline && styles.outline,
    bg ? {backgroundColor: bg} : {},
    style && style,
    disabled && {opacity: 0.5},
  ]);

  return (
    <View style={styleBlock} {...restProps}>
      {children}
    </View>
  );
};

export default Block;
