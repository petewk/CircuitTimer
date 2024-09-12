import { useState, useContext, useRef } from "react";
import { Text, View, ScrollView, TouchableHighlight, Image, Animated, FlatList } from "react-native";
import styled from "styled-components/native";


import { CircuitContext } from "../context/circuitContextProvidor";
import { TimeSelectorScroll } from "./scrollSelector";


const ActivityContainer = styled.TouchableHighlight`
    display: inline-flex;
    width: 100px;
    height: 100px;
    margin: 10px;
    color: white;
    flex-direction: row;    
    align-items: center;
    overflow: hidden;
`

const ActivitySection = styled.TouchableHighlight`
    width: 100px;
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

    let TimerSlide = useRef(new Animated.Value(-100)).current;

    const name = thisActivity;

    function slideTimer(){
        console.log('sliding')
        Animated.timing(TimerSlide, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start()

        const closing = setTimeout(()=>{
            Animated.timing(TimerSlide, {
                toValue: -100,
                duration: 600,
                useNativeDriver: true
            }).start()
        }, 7500)

    }



    return (

        <ActivityContainer >
            <Animated.View style={{transform:[{translateX: TimerSlide}], flex: 1, flexDirection: 'row', position: 'absolute'}}>
                <TimeSelectorScroll />
                <ActivitySection onPress={slideTimer}>
                    <>
                        <ActivityImage source={require('./exercise.png')}/>
                        <Text style={{color: 'white'}}>{name}</Text>
                    </>
                    
                </ActivitySection>
            </Animated.View>
        </ActivityContainer>
    )

}