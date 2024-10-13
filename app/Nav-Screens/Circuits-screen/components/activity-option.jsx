import { useState, useContext, useRef } from "react";
import { Text, View, ScrollView, TouchableHighlight, Image, Animated, FlatList } from "react-native";
import styled from "styled-components/native";


import { CircuitContext } from "../context/circuitContextProvidor";
import { TimeSelectorScroll } from "./scrollSelector";


const ActivityContainer = styled.View`
    width: 100px;
    height: 100px;
    margin: 10px;
    color: white;   
    padding-top: 0px;
    overflow: hidden;
    align-items: flex-start;
`

const ActivitySection = styled.TouchableHighlight`
    width: 100px;
    height: 100px;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const ActivityImage = styled.Image`
    width: 40px;
    height: 40px;
    color: white;
    border: 1px solid white;
`


export const ActivityOption = ({thisActivity}) => {

    
    const {startCircuits, addExercise} = useContext(CircuitContext);
    const [position, setPosition] = useState(0);
    const [display, setDisplay] = useState('flex');



    const name = thisActivity;



    function timerSlide(){
        if(display === 'flex'){
            setDisplay('none');
            // setTimeout(()=>{
            //     setDisplay('flex')
            // }, 5000)
        } else {
            setDisplay('flex')
        }
    }


    return (

        <ActivityContainer >
            <View>
                <ActivitySection style={{display: display, justifyContent: 'flex-start', textAlign: 'center'}} activeOpacity={0.5} underlayColor={'#41464d'} onPress={timerSlide}>
                    <>
                        <ActivityImage source={require('./exercise.png')}/>
                        <Text style={{color: 'white', textAlign: 'center'}}>{name}</Text>
                    </>
                </ActivitySection>
                <TimeSelectorScroll name={name} timerSlide={timerSlide}/>

            </View>
        </ActivityContainer>
    )

}