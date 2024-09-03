import React, { useState, useContext, createContext } from "react";



export const CircuitContext = createContext();




export const CircuitContextProvidor = ({children})=>{

    const [circuits, setCircuits] = useState([
        {
            exercise:'Press-ups',
            duration: 40
        },
        {
            exercise:'Sit-ups',
            duration: 40
        },
        {
            exercise:'Plank',
            duration: 40
        },
        {
            exercise:'Plank',
            duration: 40
        }
    ])


    function addExercise(clicked){
        let holderObj = {
            index: circuits.length,
            exercise: clicked,
            duration: 40
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