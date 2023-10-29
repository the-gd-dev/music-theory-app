import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '../../../components';

export const SettingsTabContent = () => {
  return (
    <Container
      bgColor="white"
      statusBarMode="light"
      containerStyles={{paddingBottom: 20}}>
      <ScrollView>
        <Text>Settings Screen TBD.</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({});
