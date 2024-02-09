import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable } from 'react-native';

import { styles } from './HomeStyle';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';

export function Home() {
    return (
        <View style={styles.appContainer}>
            <StatusBar
                style='light'
                translucent={true}
            />
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatButton />

            </View>
        </View>
    );
}