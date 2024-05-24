import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FocusContextProps {
    isHomeFocused: boolean;
    isPasswordsFocused: boolean;
    isTrashFocused: boolean;
    setFocus: (focus: 'home' | 'senhas' | 'lixeira') => void;
}


const FocusContext = createContext<FocusContextProps | undefined>(undefined);


interface FocusProviderProps {
    children: ReactNode;
}


export const useFocusContext = () => {
    const context = useContext(FocusContext);
    if (!context) {
        throw new Error('useFocusContext deve ser usado dentro de FocusProvider');
    }
    return context;
};

export const FocusProvider: React.FC<FocusProviderProps> = ({ children }) => {
    const [isHomeFocused, setHomeFocus] = useState(true);
    const [isPasswordsFocused, setPasswordsFocus] = useState(false);
    const [isTrashFocused, setTrashFocus] = useState(false);

    const setFocus = (focus: 'home' | 'senhas' | 'lixeira') => {
        setHomeFocus(focus === 'home');
        setPasswordsFocus(focus === 'senhas');
        setTrashFocus(focus === 'lixeira');
    };

    return (
        <FocusContext.Provider value={{ isHomeFocused, isPasswordsFocused, isTrashFocused, setFocus }}>
            {children}
        </FocusContext.Provider>
    );
};
