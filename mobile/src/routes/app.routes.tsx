import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from '../components/AppBar';
import Home from '../views/Home';

const Stack = createStackNavigator();

function AppRoutes() {
    return (
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
    );
}

export default AppRoutes;
