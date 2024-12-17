import { useState, useContext, useRef } from "react";
import { Text, View, ScrollView, TouchableHighlight, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { CircuitContext } from "../context/circuitContextProvidor";


export default TimeSelectorScroll = ({timerSlide, name}) => {

    const {startCircuits, addExercise} = useContext(CircuitContext);


    let timeOptions = [...Array(121).keys()]


    function timeClick(timeClicked, actClicked){
        addExercise(actClicked, timeClicked)
        timerSlide()
    }

    return (
        <>
        <View style={{height: 80, borderTopColor: 'black', borderTopWidth: 2}}>
        
        
        <ScrollView
        contentContainerStyle={{
            width: 100,
            position: 'relative',
            borderColor: '#777780',
            borderStyle: 'dotted',
            borderWidth: 3,
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
                    <>
                    
                        <TouchableHighlight style={{borderBottomColor: '#141414', borderStyle: 'inset', borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: '#6e6a6a'}} onPress={()=>{timeClick(time, name)}} underlayColor={'#3f6350'} activeOpacity={0.9} key={time} >
                            <Text style={{textAlign: 'center', fontSize:35, color: 'white'}}>{time}s</Text>    
                        </TouchableHighlight>
                    </>
                    )
                })
            }
    </ScrollView>
    <LinearGradient style={styles.lineargradient} colors={['#272a2e', '#393d42', '#111314']}/>
    </View>
    <TouchableHighlight styles={{}} underlayColor={'#633f3f'} onPress={()=>{timerSlide()}}>
        <Text style={styles.backButton}>Close</Text>
    </TouchableHighlight>
    </>
    )
}

var styles = StyleSheet.create({
    lineargradient: {
        display: 'block',
        position: 'absolute',
        height: 80,
        width: 100,
        top: 0,
        zIndex: -5,
    },
    backButton: {
        color: 'white',
        textAlign: 'center',
    }
})