import React from 'react';
import {StyleSheet} from 'react-native';

import {BottomNavigator} from '../../components';
import {tabs} from './TabContent';
const AppHome = () => {
  return <BottomNavigator data={tabs} />;
};

export default AppHome;

const styles = StyleSheet.create({});
