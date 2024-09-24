import React, { useState, createContext } from "react";



export const SettingsContext = createContext();


export const soundsNames = ['bell', 'airhorn1', 'airhorn2', 'buzzer', 'whistle1', 'whistle2', 'whistle3', 'random']


export const SettingsContextProvider = ({children})=>{

    const [theme, setTheme] = useState('normal')
    const [soundName, setSoundName] = useState('whistle2')

    return (
        <SettingsContext.Provider value={{ theme, soundName }}>
            {children}
        </SettingsContext.Provider>
    )
}