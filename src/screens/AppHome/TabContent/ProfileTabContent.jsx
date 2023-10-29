import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '../../../components';

export const ProfileTabContent = () => {
  return (
    <Container
      bgColor="white"
      statusBarMode="light"
      containerStyles={{paddingBottom: 20}}>
      <ScrollView>
        <Text>Profile Screen TBD.</Text>
      </ScrollView>
    </Container>
  );
};

export default ProfileTabContent;

const styles = StyleSheet.create({});
