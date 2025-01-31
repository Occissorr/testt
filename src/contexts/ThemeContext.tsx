import React, { createContext, useState, useContext, ReactNode, FC } from 'react';

interface IThemeContext {
    theme: string;
    handleThemeChange: (theme: string)=>void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider : FC<{children: ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<string>('Dark');

    const handleThemeChange = (theme: string) =>{
        setTheme(theme);
    };

    return(
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): IThemeContext =>{
    const themContext = useContext(ThemeContext);
    if(themContext === undefined) 
        throw new Error('useThemeContext must be used within an ThemeProvider');
    return themContext;
}