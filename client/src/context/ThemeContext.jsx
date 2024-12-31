import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [bg, setBg] = useState("white");
    const toggleTheme = () => {
        setBg((prevBg) => (prevBg === "white" ? "black" : "white"));
    };
    const getColor = (color) => {
        return color === "black" ? "white" : "black";
      }
      const textColor = getColor(bg);
    
      // logged in 
      let isLoggedIn = !! token;


      // setting token in local storage
      const setTokenInLs = (newToken) => {
        return localStorage.setItem('token', newToken);
        setToken(newToken);
    }

    // tackling logout functionality
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem('token');
      }
    


    return (
        <ThemeContext.Provider value={{ bg, toggleTheme, textColor,setTokenInLs,token,isLoggedIn, LogoutUser}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
