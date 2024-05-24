import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Modal } from 'react-native';
import { useSenhasContext } from '../../hooks/useSenhasContext';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ModalSenhaCopiada } from '../../components/Modal/ModalSenhaCopiada';
import { useLixeiraContext } from '../../hooks/useLixeiraContext';
import { styles } from './PasswordsStyles';
import { MotiView } from 'moti';

interface Senha {
    conta: string;
    senha: string;
}

export function Passwords() {

    const { senhas, setSenhas } = useSenhasContext();
    const { lixeira, setLixeira } = useLixeiraContext();
    const [showPass, setShowPass] = useState<number | null>(null);
    const [senhaCopiadaVisible, setSenhaCopiadaVisible] = useState(false);

    const senhasOrdenadas = [...senhas].sort((a, b) => a.conta.localeCompare(b.conta));

    var column = 1;

    const handleRemoverSenha = (senhaParaRemover: Senha) => {
        const novaListaSenhas = senhas.filter(senha => senha !== senhaParaRemover);
        const novaListaLixeira = [...lixeira, senhaParaRemover];

        setSenhas(novaListaSenhas);
        setLixeira(novaListaLixeira);
    };

    const handleCopySenha = (senhaParaCopiar: Senha) => {
        Clipboard.setStringAsync(senhaParaCopiar.senha);
        setSenhaCopiadaVisible(true);
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
        <View
            style={styles.lista}
        >
            <View style={{ width: "90%", flexDirection: 'row' }}>
                <Text style={styles.textList}>Conta: </Text><Text style={[styles.textList, { color: "#e5bf3c" }]}>{item.conta}</Text>
            </View>
            <View style={styles.senhaContainer}>
                <View style={{ width: '65%', flexDirection: "row" }}>
                    <Text style={styles.textList}>Senha: </Text>{isPasswordVisible(index) ? <Text style={[styles.textList, { color: "#e5bf3c" }]}>{item.senha}</Text>
                        : <Text style={[styles.textList]}>***************</Text>}
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
                            name="trash-o"
                        />
                    </View>
                </View>
            </View>
        </View >
    );


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#333'
                style='light'
            />
            <Text style={styles.textHeader}>Senhas Salvas</Text>
            {senhas.length > 0 ? (
                <View style={styles.listContainer}>
                    <FlatList
                        data={senhasOrdenadas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.senha.toString()}
                        numColumns={column}
                    />
                </View>
            ) : (
                <Text style={styles.textoVazio}>Nenhuma senha salva</Text>
            )}
            <Modal
                transparent={true}
                visible={senhaCopiadaVisible}
                animationType='fade'
            >
                <ModalSenhaCopiada
                    handleClose={() => setSenhaCopiadaVisible(false)}
                />
            </Modal>
        </View>
    );
} 
