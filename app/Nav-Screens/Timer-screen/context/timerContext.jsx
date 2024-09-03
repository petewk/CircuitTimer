import React, { useState, useContext, createContext } from "react";


import { CircuitContext } from "../../Circuits-screen/context/circuitContextProvidor";


export const TimerContext = createContext();


export const TimerContextProvider = ({children})=>{

    const [activityNum, setActivityNum] = useState(1);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const { circuits } = useContext(CircuitContext)



    function startTimer(){
        counter = circuits[activityNum].duration;
        setSecondsLeft(counter);
        const counting = setInterval(()=>{
            if(counter!=0){
                counter --
            }
            setSecondsLeft(counter)
        }, 1000)
    }
    


    return (
        <TimerContext.Provider
            value={{
                activityNum,
                secondsLeft,
                startTimer
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}