import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BottomNavigator, Container} from '../../components';
import {tabs} from './TabContent';
import {colors, fontFamily, fontSizes} from '../../assets';
import {heightPercentageToPx as hp} from '../../utils/responsive-screen';
import {MTButton} from '../../components/UI';

const AppHome = () => {
  return (
    <Container statusBarMode="dark">
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome,
          <Text style={styles.username}> John Doe</Text>
        </Text>
        <View style={{flexDirection: 'row', gap: 4}}>
          <MTButton
            variant="tertiary"
            text="Login/Signup"
            btnStyles={{height: 30}}
            btnTextStyles={{fontSize: fontSizes.body, lineHeight: 18}}
          />
        </View>
      </View>
      <BottomNavigator data={tabs} />
    </Container>
  );
};

export default AppHome;

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
