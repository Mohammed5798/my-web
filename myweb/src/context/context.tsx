import { createContext, useContext, useState, useEffect } from "react";

//* creating the context
const themeContext = createContext<any | null>(null);

//* themeProvider Component
export const ThemeProvider = ({ children }:any) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    };

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>

            {children}

        </themeContext.Provider>
    )
};

export const useTheme = () => useContext(themeContext);