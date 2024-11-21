import React, { useState, useContext, createContext } from "react";



export const CircuitContext = createContext();




export default CircuitContextProvidor = ({children})=>{

    const [circuits, setCircuits] = useState([
        {
            exercise: 'Planks',
            duration: 30
        },
        {
            exercise: 'Shuttle Runs',
            duration: 30
        },
        {
            exercise: 'Burpees',
            duration: 30
        },
        {
            exercise: 'Squats',
            duration: 30
        }
    ])


    function addExercise(exerciseClicked, duration){
        let holderObj = {
            index: circuits.length,
            exercise: exerciseClicked,
            duration: duration
        };
        
        if(circuits.length === 1 && circuits[0].exercise === 'Nothing here!'){
            setCircuits([holderObj])    
        } else {
            setCircuits([...circuits, holderObj])
        }
    }

    function deleteExercise(exerciseClicked, currentRound, paused){
        let deleteHolder = {
            index: circuits.length,
            exercise: 'Nothing here!',
            duration: 0
        }
        if(circuits.length === 1 && circuits[0].exercise !== 'Nothing here!'){
            console.log('this?')
            setCircuits([deleteHolder])
        } 
        if(circuits.length > 1){
            if(exerciseClicked <= currentRound && currentRound != 0 && !paused){
                return
            }
            let holderArray = circuits;
            holderArray.splice(exerciseClicked, 1);
            setCircuits([...holderArray]);
        }
        
    }

    return (
        <CircuitContext.Provider value={{circuits, addExercise, deleteExercise}}>
            {children}
        </CircuitContext.Provider>
    )
}