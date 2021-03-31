import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { colors } from './src/styles/colors';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
      />
      <Routes />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
