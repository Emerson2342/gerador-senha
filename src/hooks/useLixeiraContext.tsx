import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Senha {
    conta: string;
    senha: string;
}

export default Senha;

interface LixeiraContextProps {
    lixeira: Senha[];
    setLixeira: React.Dispatch<React.SetStateAction<Senha[]>>;
}

const LixeiraContext = createContext<LixeiraContextProps | undefined>(undefined);

interface LixeiraProviderProps {
    children: ReactNode;
}

export const useLixeiraContext = () => {
    const context = useContext(LixeiraContext);
    if (!context) {
        throw new Error("useLixeiraContext deve ser usado dentro de LixeiraProvider");
    }
    return context;
};

export const LixeiraProvider: React.FC<LixeiraProviderProps> = ({ children }) => {
    const [lixeira, setLixeira] = useState<Senha[]>([

    ]);

    // Carregar os dados do AsyncStorage quando o componente montar
    useEffect(() => {
        const loadAsyncData = async () => {
            try {
                const storedData = await AsyncStorage.getItem("lixeira");
                if (storedData) {
                    setLixeira(JSON.parse(storedData));
                }
            } catch (error) {
                console.error("Erro ao carregar dados do AsyncStorage:", error);
            }
        };

        loadAsyncData();
    }, []);

    // Atualizar o AsyncStorage sempre que a lista for alterada
    useEffect(() => {
        const saveAsyncData = async () => {
            try {
                await AsyncStorage.setItem("lixeira", JSON.stringify(lixeira));
            } catch (error) {
                console.error("Erro ao salvar dados no AsyncStorage:", error);
            }
        };

        saveAsyncData();
    }, [lixeira]);

    return (
        <LixeiraContext.Provider value={{ lixeira, setLixeira }}>
            {children}
        </LixeiraContext.Provider>
    );
};
