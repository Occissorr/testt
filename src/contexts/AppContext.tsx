import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextProps {
    user: string | null;
    setUser: (user: string | null) => void;
    isOddOrEven: (num: number) => string;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    function isOddOrEven(num: number): string {
        if (num % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }

    return (
        <AppContext.Provider value={{ user, setUser, isOddOrEven }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};