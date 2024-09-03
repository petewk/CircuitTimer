import { Text, View, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { useContext } from "react";
import { CircuitContext } from "../context/circuitContextProvidor";

const ActivityContainer = styled.View`
    border: 1px solid white;
    border-radius: 5px;
    min-width: 90%;
    height: 40px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-basis: flex-end;
    justify-content: space-around;
    align-items: center;
    `


const ActivityText = styled.Text`
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 17;
`

export const ExerciseBar = ({activity, index}) => {

    const context = useContext(CircuitContext);
    const deleteFunc = context.deleteExercise;


    return (
        <ActivityContainer>
            <ActivityText>{index +1}.</ActivityText>
            <ActivityText>{activity.exercise}</ActivityText>
            <ActivityText>{activity.duration}s</ActivityText>
            <TouchableHighlight onPress={()=>{deleteFunc(index)}}><Text>X</Text></TouchableHighlight>
            
        </ActivityContainer>
    )
} 