import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './screens/Home/Home';
import { Passwords } from './screens/Passwords/Passwords';
import { Lixeira } from "./screens/Lixeira/Lixeira";
import * as Animatable from 'react-native-animatable';

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import logo from '../assets/23.png'

const Tab = createBottomTabNavigator();

export function Routes() {
    const [preHome, setPreHome] = useState(true);

    function PreHome() {
        return (
            <View
                style={styles.preHomeContainer}
            >
                <Animatable.Image
                    animation={'flipInY'}
                    source={logo}
                    style={{ width: 300, resizeMode: 'contain', justifyContent: "center" }}
                />

                < Animatable.View
                    animation={'fadeInUp'}
                    delay={500}
                    style={styles.buttonContainer}
                >
                    <View>
                        <Text
                            style={styles.title}>
                            Gerenciador de Senhas
                        </Text>
                        <Text
                            style={styles.desc}>
                            Crie, gere e salve suas senhas com tamanhos e caracteres específicos!
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setPreHome(false)}
                    >
                        <Text
                            style={styles.buttonText}
                        >Iniciar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }

    function Aplication() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#000",
                        width: '90%',
                        borderRadius: 7,
                        alignSelf: "center",
                        bottom: 15,
                        borderTopWidth: 0
                    }
                }}>

                <Tab.Screen
                    name="principal"
                    component={Home}
                    options={{

                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return <Ionicons size={25} color={"#e5bf3c"} name="home" />
                            }
                            return <Ionicons size={25} color={"#e5bf3c"} name="home-outline" />
                        }
                    }}
                />
                <Tab.Screen
                    name="senhas"
                    component={Passwords}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return <Ionicons size={25} color={"#e5bf3c"} name="lock-closed" />
                            }
                            return <Ionicons size={25} color={"#e5bf3c"} name="lock-closed-outline" />
                        }
                    }}
                />

                <Tab.Screen
                    name="lixeira"
                    component={Lixeira}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return <FontAwesome size={25} color={"#e5bf3c"} name="trash" />
                            }
                            return <FontAwesome size={25} color={"#e5bf3c"} name="trash-o" />
                        }
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <View
            style={{ flex: 1, backgroundColor: "#333" }}
        >
            <StatusBar
                backgroundColor='#333'
            />
            {preHome ? <PreHome /> : <Aplication />}
        </View>
    )


}

const styles = StyleSheet.create({
    preHomeContainer: {
        flex: 1,
        backgroundColor: "#333333",
        alignItems: 'center'
    },
    title: {
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    desc: {
        color: "#fff",
        fontSize: 15,
        padding: 10,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#000",
        width: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    button: {
        backgroundColor: "#333",
        width: '70%',
        alignSelf: "center",
        borderRadius: 20
    },
    buttonText: {
        color: "#e5bf3c",
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
})