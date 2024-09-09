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
    font-size: 17px;
`

export const ExerciseBar = ({activity, index}) => {

    const context = useContext(CircuitContext);
    const deleteFunc = context.deleteExercise;


    return (
        <ActivityContainer>
            <ActivityText style={{flex:1}}>{index +1}.</ActivityText>
            <ActivityText style={{flex:4}}>{activity.exercise}</ActivityText>
            <ActivityText style={{flex:2}}>{activity.duration}s</ActivityText>
            <TouchableHighlight style={{flex:1}} onPress={()=>{deleteFunc(index)}}><Text style={{textAlign: 'center'}}>X</Text></TouchableHighlight>
            
        </ActivityContainer>
    )
} 