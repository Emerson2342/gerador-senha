import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

interface Pass {
    password: string;
}
export default Pass;

interface PassContextProps {
    pass: Pass;
    setPass: Dispatch<SetStateAction<Pass>>;
}

const PassContext = createContext<PassContextProps | undefined>(undefined);

interface PassProviderProps {
    children: ReactNode;
}

export const usePassContext = () => {
    const context = useContext(PassContext);
    if (!context) {
        throw new Error("usePassContext deve ser usado dentro de PassProvider");
    }
    return context;
};

export const PassProvider: React.FC<PassProviderProps> = ({ children }) => {
    const [pass, setPass] = useState<Pass>({ password: '' });

    return (
        <PassContext.Provider value={{ pass, setPass }}>
            {children}
        </PassContext.Provider>
    );
};
