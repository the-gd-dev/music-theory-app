import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '../../../components';

export const NotesTabContent = () => {
  return (
    <Container
      bgColor="white"
      statusBarMode="light"
      containerStyles={{paddingBottom: 20}}>
      <ScrollView>
        <Text>Notes Screen TBD.</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({});
