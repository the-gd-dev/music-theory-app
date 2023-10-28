import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSizes} from '../../assets';
import PropTypes from 'prop-types';

export const MTButton = ({
  text = 'Btn Text',
  variant = 'primary',
  type = '',
  btnStyles = {},
  btnTextStyles = {},
  btnActiveStyles = {},
  activeOpacity = 0.6,
  disabled = false,
  onPress = () => {},
  onFocus = () => {},
  ...props
}) => {
  const mtBtnStyles = [
    !type ? styles[`mtBtn_${variant}`] : styles[`mtBtn_${variant}_${type}`],
    {...styles.mtBtn, ...btnStyles},
  ];

  const mtBtnTextStyles = [
    !type
      ? styles[`mtBtnText_${variant}`]
      : styles[`mtBtnText_${variant}_${type}`],
    {...styles.mtBtnText, ...btnTextStyles},
  ];

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onFocus={onFocus}
      onPress={onPress}
      {...props}>
      <View style={mtBtnStyles}>
        <Text style={mtBtnTextStyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

MTButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['outline']),
  btnStyles: PropTypes.object,
  btnTextStyles: PropTypes.object,
  btnActiveStyles: PropTypes.object,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  onFocus: PropTypes.func,
};

const styles = StyleSheet.create({
  mtBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    width: '100%',
    borderRadius: 20,
  },
  mtBtn_primary: {
    backgroundColor: colors.primary,
  },
  mtBtn_secondary: {
    backgroundColor: colors.secondary,
  },
  mtBtn_tertiary: {
    backgroundColor: colors.tertiary,
  },
  mtBtn_primary_outline: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
    borderWidth: 2,
  },
  mtBtn_secondary_outline: {
    backgroundColor: 'transparent',
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  mtBtn_tertiary_outline: {
    backgroundColor: 'transparent',
    borderColor: colors.tertiary,
    borderWidth: 2,
  },
  mtBtnText: {
    lineHeight: 18,
    fontSize: fontSizes.heading4,
    fontWeight: '500',
    fontFamily: fontFamily.NotoSans,
  },
  mtBtnText_primary: {
    color: colors.white,
  },
  mtBtnText_secondary: {
    color: colors.dark,
  },
  mtBtnText_tertiary: {
    color: colors.white,
  },
  mtBtnText_primary_outline: {
    color: colors.primary,
  },
  mtBtnText_secondary_outline: {
    color: colors.secondary,
  },
  mtBtnText_tertiary_outline: {
    color: colors.tertiary,
  },
});
