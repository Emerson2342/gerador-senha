import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './ModalEmptyStyles';

interface ModalAddProps {
    handleClose: () => void;

}
export function ModalEmpty({ handleClose }: ModalAddProps) {

    const [tempoDecorrido, setTempoDecorrido] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleClose();
        }, 2000);


        const intervalId = setInterval(() => {
            setTempoDecorrido((tempoAnterior) => tempoAnterior + 1);
        }, 1000);


        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [handleClose]);

    return (
        <View style={styles.container}>
            <StatusBar
                style='light'
                translucent={true}
                backgroundColor={"rgba(24,24,24,0.8)"}
            />
            <View style={styles.content}>

                <Text style={styles.text}>Favor, gerar uma senha!</Text>

            </View>
        </View>
    );
}