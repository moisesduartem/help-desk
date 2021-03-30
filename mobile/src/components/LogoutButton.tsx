import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { colors } from '../styles/colors';

interface ILogoutButton {
    navigation: any;
}

function LogoutButton({ navigation }: ILogoutButton) {
    return (
        <TouchableHighlight>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: colors.white }}>
                    Sair
                </Text>
                <Button
                    type="clear"
                    icon={<Icon size={25} color={colors.primary2} name="meeting-room" />}
                />
            </View>
        </TouchableHighlight>
    );
}

export default LogoutButton;