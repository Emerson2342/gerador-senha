import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './BatLogoStyles';
import locker from '../Animated/locker.json';
import LottieView from 'lottie-react-native';

export function BatLogo() {
    return (
        <View>
            <Text style={styles.title}>
                Gerador de Senhas
            </Text>
            <LottieView
                loop={true}
                autoPlay={true}
                duration={5000}
                style={styles.logo}
                source={locker}
            />
        </View>
    );
}