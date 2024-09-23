import React, { useState, createContext } from "react";



export const SettingsContext = createContext();


const soundsList = {
    bell: '../../../../assets/sounds/bell.mp3',
    airhorn1: '../../../../assets/sounds/airhorn1.mp3',
    airhorn2: '../../../../assets/sounds/airhorn2.mp3',
    buzzer: '../../../../assets/sounds/buzzer.mp3',
    whistle1: '../../../../assets/sounds/whistle1.mp3',
    whistle2: '../../../../assets/sounds/whistle2.mp3',
    whistle3: '../../../../assets/sounds/whistle3.mp3'
}


export const SettingsContextProvider = ({children})=>{

    const [theme, setTheme] = useState('normal')
    const [sound, setSound] = useState(soundsList.bell)

    const bell = soundsList.bell;

    return (
        <SettingsContext.Provider value={{ theme, sound, bell }}>
            {children}
        </SettingsContext.Provider>
    )
}