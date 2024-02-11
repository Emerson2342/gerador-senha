import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, VirtualizedList } from 'react-native';
import { useSenhasContext } from '../../hooks/useSenhasContext';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './PasswordsStyles';


interface Senha {
    conta: string;
    senha: string;
}

export function Passwords() {

    const { senhas, setSenhas } = useSenhasContext();
    const [showPass, setShowPass] = useState<number | null>(null);
    var column = 1;

    const handleRemoverSenha = (senhaParaRemover: Senha) => {
        // nova lista excluindo a senha selecionada
        const novaListaSenhas = senhas.filter(senha => senha !== senhaParaRemover);

        // atualiza o estado com a nova lista
        setSenhas(novaListaSenhas)
    };

    const handleCopySenha = (senhaParaCopiar: Senha) => {
        Clipboard.setStringAsync(senhaParaCopiar.senha);
        Alert.alert(
            '',
            'Senha copiada para área de transferência',
            [{ text: 'Fechar', }
            ],
        );
    };

    const hidden = (index: number) => {
        setShowPass((prevIndex) => (prevIndex === index ? null : index));
    };

    const isPasswordVisible = (index: number) => {
        return showPass === index;
    };

    const handleShowOptionsAlert = (senhaParaRemover: Senha, item: Senha) => {
        Alert.alert(
            'Atenção',
            `Deseja excluir a senha ${item.conta} ?`,
            [
                {
                    text: 'Excluir Senha',
                    onPress: () => handleRemoverSenha(senhaParaRemover),
                },
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    const renderItem = ({ item, index }: { item: Senha, index: number }) => (
        <View style={styles.lista}>
            <View >
                <Text style={styles.textList}>Conta: {item.conta}</Text>
            </View>
            <View style={styles.senhaContainer}>
                <View style={{ width: '65%' }}>
                    {isPasswordVisible(index) ? <Text style={styles.textList}>Senha: {item.senha}</Text>
                        : <Text style={styles.textList}>Senha: ***************</Text>}
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => hidden(index)}
                    >
                        <FontAwesome
                            size={30}
                            color={isPasswordVisible(index) ? "#e5bf3c" : "#333"}
                            name={isPasswordVisible(index) ? 'unlock-alt' : 'lock'}
                        />

                    </TouchableOpacity>
                    <View
                        onTouchStart={() => handleCopySenha(item)}
                    >
                        <Ionicons
                            size={30}
                            color={"#333333"}
                            name="copy"
                        />
                    </View>
                    <View
                        onTouchStart={() => handleShowOptionsAlert(item, item)}
                    >
                        <FontAwesome
                            size={30}
                            color={"#333"}
                            name="close"
                        />
                    </View>
                </View>
            </View>
        </View >

    );


    return (
        <View style={styles.container}>
            <StatusBar
                style='light'
                translucent={true}
            />
            <Text style={styles.textHeader}>Senhas Salvas</Text>
            {senhas.length > 0 ? (
                <View style={styles.listContainer}>
                    <FlatList
                        data={senhas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.senha.toString()}
                        numColumns={column}
                    />
                </View>
            ) : (
                <Text style={styles.textoVazio}>Nenhuma senha salva</Text>
            )}
        </View>
    );
} 
