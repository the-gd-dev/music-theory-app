import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {colors} from '../../assets';
import PropTypes from 'prop-types';

export const Container = ({
  containerStyles,
  bgColor = colors.dark,
  statusBarMode = 'dark',
  children,
}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={statusBarMode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
      />
      <SafeAreaView
        style={{
          ...styles.container,
          ...containerStyles,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: bgColor,
        }}>
        {children}
      </SafeAreaView>
    </View>
  );
};

Container.propTypes = {
  bgColor: PropTypes.string,
  statusBarMode: PropTypes.oneOf(['dark', 'light']),
  containerStyles: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
