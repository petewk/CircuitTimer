import React, { useState, createContext, useRef } from "react";
import { Animated, Easing } from 'react-native';


export const SettingsContext = createContext();


export const soundsNames = ['bell', 'airhorn1', 'airhorn2', 'buzzer', 'whistle1', 'whistle2', 'whistle3', 'random']


export default SettingsContextProvider = ({children})=>{

    const [theme, setTheme] = useState('normal')
    const [soundName, setSoundName] = useState('whistle2')

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
        Animated.timing(feedbackPos, {
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

    const soundsPos = useRef(new Animated.Value(500)).current;
    const aboutPos = useRef(new Animated.Value(500)).current;
    const coffeePos = useRef(new Animated.Value(500)).current;
    const feedbackPos = useRef(new Animated.Value(500)).current;


    return (
        <SettingsContext.Provider value={{ theme, soundName, setSoundName, slideIn, slideOut, soundsPos, aboutPos, coffeePos, feedbackPos }}>
            {children}
        </SettingsContext.Provider>
    )
}