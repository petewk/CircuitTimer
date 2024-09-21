import { useState, useContext, useRef } from "react";
import { Text, View, TouchableHighlight, Animated, Easing} from "react-native";
import styled from "styled-components/native";


// import the settings screens

import { AnimatedSoundsModal } from './Settings-Modals/Sounds';
import {AnimatedAboutModal} from './Settings-Modals/About';
import {AnimatedCoffeesModal} from './Settings-Modals/Coffee'

const OptionsWindow = styled.View`
    width: 90%;
    height: 90%;
    background-color: "#bab150";
    position: fixed;
    right: 110%;
`


const OptionsButton = styled.TouchableHighlight`
    width: 90%;
    height: 10%;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: space-around;
    margin: 20px 0px;
`


export default function Settings() {

    const soundsPos = useRef(new Animated.Value(500)).current;
    const aboutPos = useRef(new Animated.Value(500)).current;
    const coffeePos = useRef(new Animated.Value(500)).current;


    function slideOut(target){
        console.log(target)
        Animated.timing(target, {
            toValue: 500,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start()
    }


    function slideIn(target){
        Animated.timing(soundsPos, {
            toValue: 500,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start();
        Animated.timing(aboutPos, {
            toValue: 500,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start();
        Animated.timing(coffeePos, {
            toValue: 500,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start();
        Animated.timing(target, {
            toValue: 0,
            duration: 400,
            Easing,
            useNativeDriver: true
        }).start()
    }


    


    return (
        <>
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#75744b"
            }}
            >
                <Text>This is where you get to the settings</Text>
                <OptionsButton onPress={()=>{slideIn(soundsPos)}} id="Sounds"><Text>Sounds</Text></OptionsButton>
                <OptionsButton onPress={()=>{slideIn(aboutPos)}} id="About"><Text>About</Text></OptionsButton>
                <OptionsButton onPress={()=>{slideIn(coffeePos)}} id="Coffee"><Text>Buy me a coffee</Text></OptionsButton>
            </View>
            <AnimatedSoundsModal animPos={soundsPos} slideOut={slideOut}/>
            <AnimatedAboutModal animPos={aboutPos} slideOut={slideOut}/>
            <AnimatedCoffeesModal animPos={coffeePos} slideOut={slideOut}/>
        </>
    )
}