import {React, useState , createContext} from 'react';


 const ThemeContext = createContext();


 const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === 'light') {
                return 'dark';
            } else {
                return 'light';
            }
        });
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};
