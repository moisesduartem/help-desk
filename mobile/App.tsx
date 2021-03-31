import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/views/Home';

import { colors } from './src/styles/colors';
import AppBar from './src/components/AppBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            header: () => <AppBar navigation={navigation} />,
          })}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
