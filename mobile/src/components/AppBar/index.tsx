import React from 'react';
import {
    GestureResponderEvent, Text, View, Alert, StyleProp, TextStyle, ViewStyle
} from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { colors } from '../../styles/colors';

interface IAppBar {
    navigation: any;
}

function AppBar({ navigation }: IAppBar) {

    function _handleLogout(e: GestureResponderEvent) {
        Alert.alert('Já vai?', 'Até a próxima, Moisés!');
    }

    return (
        <Header
            backgroundColor={colors.primary}
            style={headerStyle}
            centerComponent={(
                <View style={titleStyles.container}>
                    <Text style={titleStyles.text}>
                        App Help Desk
                    </Text>
                </View>
            )}
            rightComponent={(
                <Button
                    onPress={_handleLogout}
                    type="clear"
                    icon={<Icon name="meeting-room" size={25} color={colors.primary2} />}
                    iconRight
                />
            )}
        />
    );
}

const headerStyle: StyleProp<ViewStyle> = {
    flex: 1,
    alignItems: 'center',
};

const titleStyles: {
    container: StyleProp<ViewStyle>,
    text: StyleProp<TextStyle>,
} = {
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 16,
    }
};

export default AppBar;