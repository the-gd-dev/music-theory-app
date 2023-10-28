/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, images} from './assets';
import BootSplash from 'react-native-bootsplash';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    BootSplash.hide();
  }, []);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View
        style={{
          backgroundColor: colors.dark,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logoVertical}
          style={{height: 180, width: 180}}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
