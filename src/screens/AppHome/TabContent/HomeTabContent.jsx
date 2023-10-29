import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Container} from '../../../components';
import {colors, fontFamily, fontSizes, images} from '../../../assets';
import {MTButton} from '../../../components/UI';

export const HomeTabContent = () => {
  return (
    <Container containerStyles={{paddingBottom: 20}} statusBarMode="dark">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 8}}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>
            Welcome,
            <Text style={styles.username}> John Doe</Text>
          </Text>
          <View style={{flexDirection: 'row', gap: 4}}>
            <MTButton
              variant="tertiary"
              text="Login/Signup"
              btnStyles={{height: 30}}
              btnTextStyles={{fontSize: fontSizes.body, lineHeight: 18}}
            />
          </View>
        </View>
        <View style={{marginTop: 24}}>
          <Text style={styles.section}>You're progress</Text>
          <FlatList
            data={['C', 'C#', 'Cb']}
            horizontal
            renderItem={({item}) => <Text style={styles.section}>{item}</Text>}
          />
        </View>
        <View style={{marginTop: 24}}>
          <Text style={styles.section}>Completed Items</Text>
          <FlatList
            data={['C', 'C#', 'Cb']}
            horizontal
            renderItem={({item}) => <Text style={styles.section}>{item}</Text>}
          />
        </View>
        <View style={{marginTop: 24}}>
          <Text style={styles.section}>Next In Queue</Text>
          <FlatList
            data={['C', 'C#', 'Cb']}
            horizontal
            renderItem={({item}) => <Text style={styles.section}>{item}</Text>}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    lineHeight: 30,
    color: colors.white,
    fontSize: fontSizes.heading4,
    fontFamily: fontFamily.NotoSans.Regular,
  },
  username: {
    color: colors.tertiary,
    fontSize: fontSizes.heading3,
    fontFamily: fontFamily.NotoSans.SemiBold,
  },
  section: {
    color: colors.primary,
    fontSize: fontSizes.heading3,
    fontFamily: fontFamily.NotoSans.SemiBold,
    paddingBottom: 12,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
});
