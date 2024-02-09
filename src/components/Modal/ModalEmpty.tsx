import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './ModalEmptyStyles';

interface ModalAddProps {
    handleClose: () => void;

}
export function ModalEmpty({ handleClose }: ModalAddProps) {

    return (
        <View style={styles.container}>
            <StatusBar
                style='light'
                translucent={true}
                backgroundColor={"rgba(24,24,24,0.8)"}
            />
            <View style={styles.content}>

                <Text style={styles.text}>Favor, gerar uma senha!</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleClose()}
                >
                    <Text style={styles.textClose}>Voltar</Text>

                </TouchableOpacity>

            </View>
        </View>
    );
}