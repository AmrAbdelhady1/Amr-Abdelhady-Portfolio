import React, { useState, createContext, useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {

    const [mode, setModeTheme] = useState("light");

    return (
        <Context.Provider
            value={{
                mode,
                setModeTheme,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);