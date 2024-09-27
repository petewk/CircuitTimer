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



import {
    useFonts,
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold,
  } from '@expo-google-fonts/oxygen';



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
    maxHeight: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
`





export default function Circuits() {

    const context = useContext(CircuitContext)

    let circuits = context.circuits;


    const slideAnim = useRef(new Animated.Value(-500)).current;

    let [fontsLoaded] = useFonts({
        Oxygen_300Light,
        Oxygen_400Regular,
        Oxygen_700Bold,
      });


    function slideIn(){
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start()
    }

    function slideOut(){
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start()
    }

    
    if(!fontsLoaded){
        return null
      } else {
    return (
        <View
        style={{
            flex: 10,
            paddingTop: 15,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: '#4b5975'
          }}
          >
            <AnimatedSelectionModal  slideOut={slideOut} slideAnim={slideAnim}/>
            {/* <SelectionModal windowPosition={windowPos} closeFunction={closeWindow}/> */}
            <Text style={{fontFamily: 'Oxygen_700Bold', fontSize: 20, color:'white'}}>Customise your workout</Text>
            <SetExerciseList

                data={circuits} 
                renderItem={({item})=><ExerciseBar key={circuits.indexOf(item)} index={circuits.indexOf(item)} activity={item} />}
                contentContainerStyle={{justifyContent: 'center' ,alignItems:'center'}}
                />
            <AddButton onPress={slideIn}><FontAwesomeIcon style={{color: 'white'}} icon={faPlus} size={30} /></AddButton>
        </View>
    ) }
}


