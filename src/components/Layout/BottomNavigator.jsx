import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Container} from './Container';
import {colors, fontFamily, fontSizes, icons} from '../../assets';
import {
  heightPercentageToPx as hp,
  widthPercentageToPx as wp,
} from '../../utils/responsive-screen';
export const BottomNavigator = ({tabNavigation = []}) => {
  return (
    <Container containerStyles={{justifyContent: 'space-between'}}>
      {/* Content Container */}
      <View style={{height: hp(90)}}></View>
      {/* Bottom Navigator */}
      <View style={styles.bottomNavigator}>
        {/* Tab */}
        {Array(...Array.from({length: 4})).map((_, idx) => (
          <TouchableOpacity style={styles.tab}>
            <View style={styles.tabInner}>
              <Image
                source={icons.defaultTabIcon}
                style={styles.tabImage}
                resizeMethod="scale"
                resizeMode="contain"
              />
              <Text style={styles.tabLabel}>Tab Title</Text>
            </View>
            {idx < 3 && <View style={styles.divider} />}
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  bottomNavigator: {
    backgroundColor: colors.darker,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabInner: {
    paddingLeft: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: colors.darkgray,
    width: wp(0.2),
    height: hp(5.8),
  },
  tabImage: {
    height: hp(4),
    width: '75%',
    tintColor: 'darkgray',
  },
  tabLabel: {
    color: colors.darkgray,
    fontSize: fontSizes.medium,
    fontFamily: fontFamily.NotoSans,
    fontWeight: 'bold',
    marginTop: 4,
    flexWrap: 'wrap',
  },
});
