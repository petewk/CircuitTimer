import React, { useState, useContext, createContext } from "react";
import { Vibration } from "react-native";

import { CircuitContext } from "../../Circuits-screen/context/circuitContextProvidor";


export const TimerContext = createContext();

const Pattern = [
    0, 400, 200, 400
]


export const TimerContextProvider = ({children})=>{

    const [activityNum, setActivityNum] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [flash, setFlash] = useState(false)
    const [paused, setPaused] = useState(null)
    const { circuits } = useContext(CircuitContext)


    function flashScreen(pause, duration){
        setFlash(true)
        setTimeout(()=>{
            setFlash(false)
            setTimeout(()=>{
                setFlash(true)
                setTimeout(()=>{
                    setFlash(false)
                }, duration)
            }, pause)
        }, duration)

    }

    function roundEnd(){   
        setTimeout(()=>{
            setActivityNum(activityNum +1)
            startTimer();
        }, 5000)
        flashScreen(200, 400);
        Vibration.vibrate(Pattern, false)
        console.log("time's up, get ready");
    }


    function startTimer(){
        counter = circuits[activityNum].duration;
        if(paused === null){
            setPaused(false)
            setSecondsLeft(counter);
            const counting = setInterval(()=>{
                if(counter!=0 && paused === false){
                    counter --
                }
                setSecondsLeft(counter)
                if(counter === 0){
                    clearInterval(counting);
                    roundEnd()
                }
            }, 1000)
        } else if(paused === true){
            setPaused(false)
            console.log(paused)
        } else {
            setPaused(true)
            console.log(paused)
        }

    }



    return (
        <TimerContext.Provider
            value={{
                activityNum,
                secondsLeft,
                startTimer, 
                flash,
                paused
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}