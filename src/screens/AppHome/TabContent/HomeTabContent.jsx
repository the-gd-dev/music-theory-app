import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fontFamily, fontSizes} from '../../../assets';
import {Container} from '../../../components';
import {MTButton} from '../../../components/UI';
import {heightPercentageToPx as hp} from '../../../utils/responsive-screen';

export const HomeTabContent = () => {
  return (
    <Text>Hiii</Text>
  );
};

const styles = StyleSheet.create({
  note: {
    backgroundColor: colors.tertiary,
    height: hp(10),
    width: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  noteText: {
    lineHeight: 30,
    color: colors.dark,
    fontSize: fontSizes.heading1,
    fontFamily: fontFamily.NotoSans.Bold,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    lineHeight: 30,
    color: colors.white,
    fontSize: fontSizes.heading4,
    fontFamily: fontFamily.NotoSans.Regular,
  },
  username: {
    color: colors.tertiary,
    fontSize: fontSizes.heading3,
    fontFamily: fontFamily.NotoSans.SemiBold,
  },
  section: {
    color: colors.primary,
    fontSize: fontSizes.heading3,
    fontFamily: fontFamily.NotoSans.SemiBold,
    paddingBottom: 12,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
});
