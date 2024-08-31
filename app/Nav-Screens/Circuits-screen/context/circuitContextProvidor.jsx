import React, { useState, useContext, createContext } from "react";



export const CircuitContext = createContext();




export const CircuitContextProvidor = ({children})=>{

    function addActivity(){
        null
    }

    function addExercise(clicked){
        let holderObj = {
            index: startCircuits.length,
            exercise: clicked,
            duration: 40
        };

        console.log(clicked)
        startCircuits.push(holderObj);
    }

    const startCircuits = [
        {
            index:1,
            exercise:'Press-ups',
            duration: 40
        },
        {
            index:2,
            exercise:'Sit-ups',
            duration: 40
        },
        {
            index:3,
            exercise:'Plank',
            duration: 40
        },
        {
            index:4,
            exercise:'Plank',
            duration: 40
        }
    ]

    return (
        <CircuitContext.Provider value={{startCircuits, addExercise}}>
            {children}
        </CircuitContext.Provider>
    )
}