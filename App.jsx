import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppHome from './src/screens/AppHome/AppHome';
import AppIntro from './src/screens/AppIntro/AppIntro';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppIntro" component={AppIntro} />
        <Stack.Screen name="AppHome" component={AppHome} />
      </Stack.Navigator>
    </NavigationContainer>
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
