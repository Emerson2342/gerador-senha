import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

import { styles } from './HomeStyle';
import { Logo } from '../../components/Logo/Logo';
import { usePassContext } from '../../hooks/usePassContext'
import { ModalAdd } from '../../components/Modal/ModalAdd';
import { ModalAddType } from '../../components/Modal/ModalAddType';
import Slider from '@react-native-community/slider';
import { Feather } from '@expo/vector-icons';
import { ModalEmpty } from '../../components/Modal/ModalEmpty';
import { ModalEmptyChar } from '../../components/Modal/ModalEmptyChar';
import * as Animatable from 'react-native-animatable';

export function Home() {
    const { pass, setPass } = usePassContext();
    const [size, setSize] = useState(5);
    const [showPass, setShowPass] = useState(false);
    const [modalAddVisible, setModalAddVisible] = useState(false);
    const [modalAddTypeVisible, setModalAddTypeVisible] = useState(false);
    const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
    const [modalEmptyCharVisible, setModalEmptyCharVisible] = useState(false);

    const [lowerCaseChar, setLowerCaseChar] = useState(false);
    const [upperCaseChar, setUpperCaseChar] = useState(false);
    const [numberChar, setNumberChar] = useState(false);
    const [especialChar, setEspecialChar] = useState(false);

    const lowerCase = () => lowerCaseChar ? setLowerCaseChar(false) : setLowerCaseChar(true);
    const upperCase = () => upperCaseChar ? setUpperCaseChar(false) : setUpperCaseChar(true);
    const number = () => numberChar ? setNumberChar(false) : setNumberChar(true);
    const especial = () => especialChar ? setEspecialChar(false) : setEspecialChar(true);

    const lowerCaseSet = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCaseSet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numberSet = '01234567890123456789';
    const especialSet = '!@#$%&?!@#$%&?';


    function handleGenerateButton() {

        if (!(lowerCaseChar || upperCaseChar || numberChar || especialChar)) {
            setModalEmptyCharVisible(true);
        }
        else {
            var passChar = ""

            if (lowerCaseChar) {
                passChar += lowerCaseSet
            }
            if (upperCaseChar) {
                passChar += upperCaseSet
            }
            if (numberChar) {
                passChar += numberSet
            }
            if (especialChar) {
                passChar += especialSet
            }
            let password = "";
            for (let index = 0; index < size; index++)
                password += passChar.charAt(
                    Math.floor(Math.random() * passChar.length)
                );

            setPass((prevPass) => ({ ...prevPass, password: password }));
            setShowPass(true);
        }
    }

    function handleTypeButton() {
        setModalAddTypeVisible(true)
        setPass((prevPass) => ({ ...prevPass, password: '' }));
    }


    function handleSavePass() {
        pass.password !== '' ? setModalAddVisible(true) : setModalEmptyVisible(true);

    }
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={styles.inputContainer}>
                <View>
                    <View
                        style={{ alignSelf: "center" }}
                    >
                        <Text style={[styles.text, { color: "#e5bf3c" }]}>Senha Gerada</Text></View>
                    <View
                        style={styles.passContainer}
                    >{showPass && <Text
                        style={styles.textPassword}
                    >{pass.password}</Text>}

                    </View>

                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsContent}>

                            <TouchableOpacity
                                onPress={() => lowerCase()}
                                style={styles.optionItem}
                            ><Feather style={styles.icon} size={20} color={"#e5bf3c"} name={lowerCaseChar ? 'check-square' : 'square'}
                                /><Text style={styles.textOptions}>{' '}Minúsculas</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => upperCase()}
                                style={styles.optionItem}
                            ><Feather style={styles.icon} size={20} color={"#e5bf3c"} name={upperCaseChar ? 'check-square' : 'square'} /><Text style={styles.textOptions}>{' '}Maiúsculas</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.optionsContent}>
                            <TouchableOpacity
                                onPress={() => number()}
                                style={styles.optionItem}
                            >
                                <Feather style={styles.icon} size={20} color={"#e5bf3c"} name={numberChar ? 'check-square' : 'square'} /><Text style={styles.textOptions}>{' '}Numéricos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => especial()}
                                style={styles.optionItem}
                            >
                                <Feather style={styles.icon} size={20} color={"#e5bf3c"} name={especialChar ? 'check-square' : 'square'}
                                /><Text style={styles.textOptions}>{' '}Especiais</Text>
                            </TouchableOpacity>
                        </View>

                    </View >
                </View >
                <Text style={styles.textChar}>{size} caracteres</Text>
                <Slider
                    style={{ height: 50, width: "85%" }}
                    minimumValue={5}
                    maximumValue={15}
                    maximumTrackTintColor="#ffff"
                    minimumTrackTintColor="#000"
                    thumbTintColor="#e5bf3c"
                    value={size}
                    onValueChange={(newValue) => setSize(Math.round(newValue))}
                />

                {/* **********************Botões***************************************/}

                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        onPress={() => handleGenerateButton()}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Gerar Senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleSavePass()}

                        style={styles.button}
                    >
                        <Text style={styles.text}>Salvar Senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleTypeButton()}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Digite a Senha</Text>
                    </TouchableOpacity>
                </View>

                {/* **********************Botões***************************************/}

                <Modal
                    visible={modalAddVisible}
                    transparent={true}
                    animationType='fade'
                >
                    <ModalAdd
                        handleClose={() => setModalAddVisible(false)}
                    />
                </Modal>


                <Modal
                    visible={modalEmptyVisible}
                    transparent={true}
                    animationType='fade'
                >
                    <ModalEmpty
                        handleClose={() => setModalEmptyVisible(false)}
                    />
                </Modal>
                <Modal
                    visible={modalAddTypeVisible}
                    transparent={true}
                    animationType='fade'
                >
                    <ModalAddType
                        handleClose={() => setModalAddTypeVisible(false)}
                    />
                </Modal>
                <Modal
                    visible={modalEmptyCharVisible}
                    transparent={true}
                    animationType='fade'
                >
                    <ModalEmptyChar
                        handleClose={() => setModalEmptyCharVisible(false)}
                    />
                </Modal>

            </View>
        </View >
    );
}