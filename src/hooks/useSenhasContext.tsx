import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Senha {
    conta: string;
    senha: string;
}

export default Senha;

interface SenhasContextProps {
    senhas: Senha[];
    setSenhas: React.Dispatch<React.SetStateAction<Senha[]>>;
}

const SenhasContext = createContext<SenhasContextProps | undefined>(undefined);

interface SenhasProviderProps {
    children: ReactNode;
}

export const useSenhasContext = () => {
    const context = useContext(SenhasContext);
    if (!context) {
        throw new Error("useSenhasContext deve ser usado dentro de SenhasProvider");
    }
    return context;
};

export const SenhasProvider: React.FC<SenhasProviderProps> = ({ children }) => {
    const [senhas, setSenhas] = useState<Senha[]>([

    ]);

    // Carregar os dados do AsyncStorage quando o componente montar
    useEffect(() => {
        const loadAsyncData = async () => {
            try {
                const storedData = await AsyncStorage.getItem("senhas");
                if (storedData) {
                    setSenhas(JSON.parse(storedData));
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
                await AsyncStorage.setItem("senhas", JSON.stringify(senhas));
            } catch (error) {
                console.error("Erro ao salvar dados no AsyncStorage:", error);
            }
        };

        saveAsyncData();
    }, [senhas]);

    return (
        <SenhasContext.Provider value={{ senhas, setSenhas }}>
            {children}
        </SenhasContext.Provider>
    );
};
