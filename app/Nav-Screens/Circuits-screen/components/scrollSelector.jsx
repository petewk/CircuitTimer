import { useState, useContext, useRef } from "react";
import { Text, View, ScrollView, TouchableHighlight, Image, Animated, FlatList } from "react-native";
import styled from "styled-components/native";


import { CircuitContext } from "../context/circuitContextProvidor";


export default TimeSelectorScroll = ({timerSlide, name}) => {

    const {startCircuits, addExercise} = useContext(CircuitContext);


    let timeOptions = [...Array(120).keys()]


    function timeClick(timeClicked, actClicked){
        addExercise(actClicked, timeClicked)
        timerSlide()
    }

    return (
        <ScrollView
        contentContainerStyle={{
            width: 100,
            borderColor: 'white',
            borderWidth: 1,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            shadowColor: 'white',
            shadowOffset: {
                width: 5,
                height: 5
            },
            shadowOpacity: 0.8
        }}
        contentOffset={
            {x:0, y:3175}
        }
    >
        {
            timeOptions.map((time)=>{
                return(
                    <TouchableHighlight onPress={()=>{timeClick(time, name)}} underlayColor={'#3f6350'} activeOpacity={0.9} key={timeOptions.indexOf(time)} >
                        <Text style={{textAlign: 'center', fontSize:40, color: 'white'}}>{time}s</Text>    
                    </TouchableHighlight>
                )
            })
        }
    </ScrollView>
    )
}