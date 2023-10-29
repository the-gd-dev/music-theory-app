import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '../../components/Layout';
import {colors, fontFamily, fontSizes, images} from '../../assets';
import {MTButton} from '../../components/UI';
import {
  heightPercentageToPx as hp,
  widthPercentageToPx as wp,
} from '../../utils/responsive-screen';

const AppIntro = ({navigation}) => {
  return (
    <Container containerStyles={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.heading}>Let's start learning</Text>
          <Image source={images.logoVertical} style={styles.imageStyle} />
        </View>

        <MTButton
          variant="tertiary"
          text="Start Learning"
          onPress={() => navigation.navigate('AppHome')}
          btnStyles={{height: hp(6), borderRadius: 30}}
        />
      </View>
    </Container>
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  contentContainer: {
    width: wp(100),
    height: hp(80),
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  imageStyle: {
    alignSelf: 'center',
  },
  heading: {
    marginBottom: '25%',
    textAlign: 'center',
    fontSize: fontSizes.display2,
    color: colors.tertiary,
    fontFamily: fontFamily.NotoSans,
    fontWeight: '400',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
});
