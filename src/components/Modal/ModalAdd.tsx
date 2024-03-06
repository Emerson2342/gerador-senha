import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, TextInput, Modal } from 'react-native';
import { styles } from './ModalAddStyles';
import { usePassContext } from '../../hooks/usePassContext';
import { useSenhasContext } from '../../hooks/useSenhasContext';
import { ModalContaEmBranco } from './ModalContaEmBranco';
import { ModalContaExistente } from './ModalContaExistente';
interface ModalAddProps {
    handleClose: () => void;
}

interface Senha {
    conta: string;
    senha: string;
}

export function ModalAdd({ handleClose }: ModalAddProps) {

    const { pass, setPass } = usePassContext();
    const { senhas, setSenhas } = useSenhasContext();

    const [nomeConta, setNomeConta] = useState('');
    const [contaEmBrancoVisible, setContaEmBrancoVisible] = useState(false);
    const [contaExistenteVisible, setContaExistenteVisible] = useState(false);


    const addSenha = (nomeConta: string) => {
        if (pass !== undefined && pass !== null) {
            const senhaExistente = senhas.some((senha) => senha.conta.trim() === nomeConta.trim());

            if (nomeConta === '') {
                setContaEmBrancoVisible(true);
            } else if (senhaExistente) {
                setContaExistenteVisible(true);
            }
            else {
                const novaSenha: Senha = {
                    conta: nomeConta.trim(),
                    senha: pass.password,
                };

                setSenhas([...senhas, novaSenha]);
                setNomeConta('');
                setPass({ password: '' });
                handleClose();

            }
        } else {
            console.error("A propriedade 'pass' está indefinida ou nula.");
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar
                style='light'
                translucent={true}
                backgroundColor={"rgba(24,24,24,0.8)"}
            />
            <View style={styles.content}>
                <Text style={styles.senha}>{pass.password}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a conta da Senha"
                    value={nomeConta}
                    onChangeText={(text) => {
                        setNomeConta(text);
                    }}

                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => addSenha(nomeConta)}

                    ><Text style={styles.textClose}>Salvar</Text></TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleClose();
                            setPass({ password: '' });
                        }}

                    ><Text style={styles.textClose}>Voltar</Text></TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                visible={contaEmBrancoVisible}
                animationType='fade'
            >
                <ModalContaEmBranco
                    handleClose={() => setContaEmBrancoVisible(false)}
                />
            </Modal>
            <Modal
                transparent={true}
                visible={contaExistenteVisible}
                animationType='fade'
            >
                <ModalContaExistente
                    handleClose={() => setContaExistenteVisible(false)}
                />
            </Modal>

        </View >
    );
}