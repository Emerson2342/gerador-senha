import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useSenhasContext } from '../../hooks/useSenhasContext';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

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
            'Senha Copiada para área de transferência',
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

    const handleShowOptionsAlert = (senhaParaRemover: Senha) => {
        Alert.alert(
            'Atenção',
            'Deseja realmente excluir a senha?',
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
        <View style={styles.lista}
        >
            <TouchableOpacity
                style={[styles.content, { width: "40%" }]}
                onLongPress={() => handleShowOptionsAlert(item)}>
                <Text style={styles.textList}>{item.conta}</Text>
            </TouchableOpacity>
            <View
                onTouchStart={() => hidden(index)}
                style={styles.icon}>
                <FontAwesome
                    size={20}
                    color={"#e5bf3c"}
                    name={isPasswordVisible(index) ? 'unlock-alt' : 'lock'}
                />
            </View>
            <View

                style={styles.content}>
                <TouchableOpacity
                    onPress={() => handleCopySenha(item)}
                >
                    {isPasswordVisible(index) ? <Text style={styles.textList}>{item.senha}</Text>
                        : <Text style={styles.textList}>********************</Text>}
                </TouchableOpacity>

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

            <View style={styles.listContainer}>
                <FlatList
                    data={senhas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.senha.toString()}
                    numColumns={column}
                />
            </View>
        </View>
    );
} 
