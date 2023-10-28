import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '../../components/Layout';
import {colors, fontFamily, fontSizes, images} from '../../assets';
import {MTButton} from '../../components/UI';

const AppIntro = () => {
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
          btnStyles={{height: 48, borderRadius: 30}}
        />
      </View>
    </Container>
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: '80%',
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
    color: colors.white,
    fontFamily: fontFamily.NotoSans,
    fontWeight: '400',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
});
