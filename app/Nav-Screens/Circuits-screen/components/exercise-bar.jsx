import { Text, View } from "react-native";
import styled from "styled-components/native";

const ActivityContainer = styled.View`
    border: 1px solid white;
    border-radius: 5px;
    min-width: 90%;
    height: 40px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    `


const ActivityText = styled.Text`
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ExerciseBar = ({activity}) => {

    return (
        <ActivityContainer>
            <ActivityText>{activity.index}.</ActivityText>
            <ActivityText>{activity.exercise}</ActivityText>
            <ActivityText>{activity.duration}s</ActivityText>
        </ActivityContainer>
    )
} 