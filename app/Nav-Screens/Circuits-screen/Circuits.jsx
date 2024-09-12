import { useState, useContext, useRef } from "react";
import { Text, View, Button, StyleSheet, TouchableHighlight, FlatList, Animated, Easing } from "react-native";
import styled from "styled-components/native";


// import fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';



// import components
import { ExerciseBar } from "./components/exercise-bar";
import { SelectionModal } from "./components/exercises-modal";

import {AnimatedSelectionModal} from "./components/animated-modal";

// Import context
import { CircuitContext } from "./context/circuitContextProvidor";




const AddButton = styled.TouchableOpacity`
    width: 90%;
    border-radius: 5px;
    border: 1px solid white;
    background-color: 'red';
    height: 10%;
    justify-content: center;
    align-items: center;
    margin: 10px;
    
`

const SetExerciseList = styled.FlatList`
    height: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
`





export default function Circuits() {

    const context = useContext(CircuitContext)

    let circuits = context.circuits;


    const slideAnim = useRef(new Animated.Value(-500)).current;


    function slideIn(){
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start()
    }

    function slideOut(){
        console.log("sliding")
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start()
    }

    
    
    return (
        <View
        style={{
            flex: 10,
            paddingTop: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#4b5975'
          }}
          >
            <AnimatedSelectionModal  slideOut={slideOut} slideAnim={slideAnim}/>
            {/* <SelectionModal windowPosition={windowPos} closeFunction={closeWindow}/> */}
            <Text>This is where you set the circuits</Text>
            <SetExerciseList

                data={circuits} 
                renderItem={({item})=><ExerciseBar key={circuits.indexOf(item)} index={circuits.indexOf(item)} activity={item} />}
                contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}
                />
            <AddButton onPress={slideIn}><FontAwesomeIcon style={{color: 'white'}} icon={faPlus} size={30} /></AddButton>
        </View>
    )
}


