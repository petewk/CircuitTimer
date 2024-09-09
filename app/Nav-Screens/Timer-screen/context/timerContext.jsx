import React, { useState, useContext, createContext, useEffect } from "react";
import { Vibration } from "react-native";

import { CircuitContext } from "../../Circuits-screen/context/circuitContextProvidor";


export const TimerContext = createContext();



export const TimerContextProvider = ({children})=>{

    let currentRound = 1;

    const { circuits } = useContext(CircuitContext)
    const [flash, setFlash] = useState(false);



    function flashScreen(wait, duration){
        setFlash(true)
        setTimeout(()=>{
            setFlash(false)
            setTimeout(()=>{
                setFlash(true)
                setTimeout(()=>{
                    setFlash(false)
                }, duration)
            }, wait)
        }, duration)
    }


    return (
        <TimerContext.Provider
            value={{
                flash,
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}