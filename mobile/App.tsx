import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/pages/Home';

import { Icon } from 'react-native-elements';
import { colors } from './src/styles/colors';
import LogoutButton from './src/components/LogoutButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              alignSelf: 'center',
            },
            headerRight: () => <LogoutButton navigation={navigation} />,
            title: 'App Help Desk',
            headerTintColor: colors.white,
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
