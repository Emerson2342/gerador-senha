import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/batLogo.png'

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>
                Gerador de Senhas
            </Text>
            <Image
                style={styles.logo}
                source={batLogo}
            />

        </>
    );
}