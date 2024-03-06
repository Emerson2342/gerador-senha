import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useSenhasContext } from '../../hooks/useSenhasContext';
import { useLixeiraContext } from '../../hooks/useLixeiraContext';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './LixeiraStyles';

interface Senha {
    conta: string;
    senha: string;
}

export function Lixeira() {

    const { senhas, setSenhas } = useSenhasContext();
    const { lixeira, setLixeira } = useLixeiraContext();
    const [showPass, setShowPass] = useState<number | null>(null);
    var column = 1;

    const senhasOrdenadas = [...lixeira].sort((a, b) => a.conta.localeCompare(b.conta));

    const handleRemoverSenha = (senhaParaRemover: Senha) => {
        const novaListaLixeira = lixeira.filter(senha => senha !== senhaParaRemover);

        setLixeira(novaListaLixeira)
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
            `Deseja excluir a senha ${item.conta} permanentemente?`,
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

    const handleRecycle = (senhaParaRemover: Senha, item: Senha) => {
        Alert.alert(
            'Atenção',
            `Deseja restaurar a senha ${item.conta} ?`,
            [
                {
                    text: 'Restaurar Senha',
                    onPress: () => handleRecycleSenha(senhaParaRemover),
                },
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    const handleRecycleSenha = (senhaParaRemover: Senha) => {
        const novaListaLixeira = lixeira.filter(senha => senha !== senhaParaRemover);
        const novaListaSenhas = [...senhas, senhaParaRemover];

        setSenhas(novaListaSenhas);
        setLixeira(novaListaLixeira);
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
                        onTouchStart={() => handleRecycle(item, item)}
                    >
                        <MaterialCommunityIcons
                            size={30}
                            color={"#333333"}
                            name="recycle"
                        />
                    </View>
                    <View
                        onTouchStart={() => handleShowOptionsAlert(item, item)}
                    >
                        <MaterialCommunityIcons
                            size={30}
                            color={"#333"}
                            name="delete-forever"
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
            <Text style={styles.textHeader}>Lixeira</Text>
            {lixeira.length > 0 ? (
                <View style={styles.listContainer}>
                    <FlatList
                        data={senhasOrdenadas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.senha.toString()}
                        numColumns={column}
                    />
                </View>
            ) : (
                <Text style={styles.textoVazio}>Lixeira está vazia</Text>
            )}
        </View>
    );
} 
