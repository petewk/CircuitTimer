import React, { useState, useContext, createContext } from "react";


export const TimerContext = createContext();


export const TimerContextProvider = ({children})=>{

    const [activityNum, setActivityNum] = useState(1);

    return (
        <TimerContext.Provider
            value={{
                activityNum
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}