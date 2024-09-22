import React, { useState, useContext, createContext } from "react";



export const CircuitContext = createContext();




export const CircuitContextProvidor = ({children})=>{

    const [circuits, setCircuits] = useState([
        {
            exercise:'Press-ups',
            duration: 10
        },
        {
            exercise:'Sit-ups',
            duration: 10
        },
        {
            exercise:'Plank',
            duration: 10
        },
        {
            exercise:'Plank',
            duration: 10
        }
    ])


    function addExercise(clicked, duration){
        let holderObj = {
            index: circuits.length,
            exercise: clicked,
            duration: duration
        };

        setCircuits([...circuits, holderObj])
    }

    function deleteExercise(clicked){
        let holderArray = circuits;
        holderArray.splice(clicked, 1);
        setCircuits([...holderArray]);
        
    }

    return (
        <CircuitContext.Provider value={{circuits, addExercise, deleteExercise}}>
            {children}
        </CircuitContext.Provider>
    )
}