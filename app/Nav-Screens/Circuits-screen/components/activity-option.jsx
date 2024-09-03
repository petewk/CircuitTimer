import { useState, useContext } from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import styled from "styled-components/native";


import { CircuitContext } from "../context/circuitContextProvidor";


const ActivityContainer = styled.TouchableHighlight`
    display: inline-flex;
    width: 75px;
    height: 75px;
    margin: 10px;
    color: white;
    justify-content: center;
    align-items: center;
`


const ActivityImage = styled.Image`
    width: 30px;
    height: 30px;
    color: white;
    border: 1px solid white;
`


export const ActivityOption = ({thisActivity}) => {

    
    const {startCircuits, addExercise} = useContext(CircuitContext);

    const name = thisActivity;

    return (

        <ActivityContainer onPress={()=>{addExercise(name)}}>
            <View style={{display: 'flex', alignItems:"center", alignContent: 'center'}}>
                <ActivityImage source={require('./exercise.png')}/>
                <Text style={{color: 'white'}}>{name}</Text>
            </View>
        </ActivityContainer>
    )

}