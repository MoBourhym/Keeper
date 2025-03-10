import {React, createContext, useState} from 'react';



const FormatContext = createContext();

const FormatProvider = ({children}) => {
    const [format, setFormat] = useState(false);
    const toggleFormat = () => {
        setFormat((prev)=>!prev);
      
    };

    return (
        <FormatContext.Provider value={{format, toggleFormat}}>
            {children}
        </FormatContext.Provider>
    )
}

export {FormatProvider, FormatContext};
