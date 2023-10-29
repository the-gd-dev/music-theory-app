import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Home,
  MusicNote,
  Settings,
  User,
  colors,
  fontFamily,
  fontSizes,
  icons,
} from '../../assets';
import {
  heightPercentageToPx as hp,
  widthPercentageToPx as wp,
} from '../../utils/responsive-screen';
import {Container} from './Container';

export const BottomNavigator = ({data}) => {
  const flatListRef = useRef(null);
  const [active, setActive] = useState(0);
  const {width} = Dimensions.get('window');

  const SPACING = 5;
  const ITEM_LENGTH = width;
  const BORDER_RADIUS = 20;
  const handleTabClick = idx => {
    setActive(idx);
    flatListRef.current.scrollToIndex({
      animated: true,
      index: idx,
    });
  };

  return (
    <View style={{flex: 1}}>
      {/* Content Container */}
      <View style={{height: hp(100)}}>
        <FlatList
          ref={flatListRef}
          pagingEnabled
          data={data}
          renderItem={({item, index}) => (
            <FlatListItem Content={item?.content} width={ITEM_LENGTH} />
          )}
          horizontal
          onMomentumScrollEnd={({nativeEvent}) => {
            const offsetWidth = nativeEvent.contentOffset.x;
            const extractedIndex = Math.round(offsetWidth / ITEM_LENGTH);
            setActive(extractedIndex);
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
      {/* Bottom Navigator */}
      <View style={styles.bottomNavigator}>
        {/* Tab */}
        {data.map((item, idx) => (
          <TabItem
            key={idx}
            item={item}
            SvgIcon={item.icon}
            active={idx === active}
            isLastItem={idx < data.length - 1}
            onPress={() => handleTabClick(idx)}
          />
        ))}
      </View>
    </View>
  );
};

const FlatListItem = ({Content = () => <></>, width}) => (
  <View style={{width: width}}>
    <Content />
  </View>
);

const TabItem = ({item, SvgIcon, active, onPress, isLastItem}) => {
  return (
    <View style={[styles.tab]} key={item.id}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.tabInner}>
          <SvgIcon
            height={hp(3.25)}
            width={'100%'}
            fill={active ? 'rgb(0 218 198)' : 'slategray'}
          />
          <Text style={[styles.tabLabel, active ? styles.tabLabelActive : {}]}>
            {item.label}
          </Text>
        </View>
      </TouchableOpacity>
      {isLastItem && <View style={styles.divider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: 'white',
  },
  bottomNavigator: {
    top: -hp(2),
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
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
    backgroundColor: colors.white,
    width: wp(0.2),
    height: hp(5.8),
  },
  tabImage: {
    height: hp(4),
    width: '75%',
    tintColor: 'white',
  },
  tabImageActive: {
    tintColor: 'rgb(0 218 198)',
  },
  tabLabelActive: {
    color: colors.tertiary,
  },
  tabLabel: {
    color: colors.slategray,
    fontSize: fontSizes.medium,
    fontFamily: fontFamily.NotoSans.SemiBold,
    marginTop: 4,
    flexWrap: 'wrap',
  },
});
