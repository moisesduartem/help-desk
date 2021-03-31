import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { colors } from '../styles/colors';

import AppBar from '../components/AppBar';
import SearchServiceCall from '../views/SearchServiceCall';
import RegisterServiceCall from '../views/RegisterServiceCall';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppRoutes() {

    const mainStackOptions = () => ({
        header: () => <AppBar />,
    });

    const AppTabRoutes = () => (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {

                    let iconName;

                    switch (route.name) {
                        case 'SearchServiceCall':
                            iconName = 'search';
                            break;
                        case 'RegisterServiceCall':
                            iconName = 'create';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }

                    return <Icon name={iconName} size={25} color={colors.secondary} />;
                },
            })}
            tabBarOptions={{
                style: {
                    height: 65,
                    paddingBottom: 10,
                    backgroundColor: colors.dark,
                },
                activeTintColor: colors.white,
                inactiveTintColor: colors.grey1,
            }}
            initialRouteName="SearchServiceCall"
        >
            <Tab.Screen
                options={{ title: 'Buscar Chamado' }}
                name="SearchServiceCall"
                component={SearchServiceCall}
            />
            <Tab.Screen
                options={{ title: 'Registrar Chamado' }}
                name="RegisterServiceCall"
                component={RegisterServiceCall}
            />
        </Tab.Navigator>
    );

    return (
        <Stack.Navigator
            screenOptions={mainStackOptions}
            initialRouteName="MainStack"
        >
            <Stack.Screen
                name="MainStack"
                component={AppTabRoutes}
            />
        </Stack.Navigator>
    );
}

export default AppRoutes;
