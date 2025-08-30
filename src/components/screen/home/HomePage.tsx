import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppDrawer from '../../common/AppDrawer';
import Header from '../../common/Header';
import Buildings from './components/Buildings';
import Pramukh from './components/Pramukh';
import Slider from './components/Slider';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Slider />
        <Pramukh />
        <Buildings />
      </ScrollView>
      <AppDrawer />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
