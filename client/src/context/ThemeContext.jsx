import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

export const themeProvider = ({ children }) => {
    const [bg, setbg] = useState("white");
    const toggleTheme = ()=>{
       
    if(!bg == false ? setbg(false): setbg(true));

     }
    return (
        <themeContext.Provider value={{ bg, setbg,toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
};

export const useTheme = () => {
    return useContext(themeContext);
}