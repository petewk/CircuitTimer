import { useContext, useEffect, useState } from "react";
import { Text, TouchableHighlight, Animated, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { SettingsContext } from "../settingsContext";

import { Audio } from 'expo-av';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';


export const AnimatedSoundsModal = ({animPos, slideOut}) => {

    const soundOptions = ['bell', 'airhorn1', 'airhorn2', 'buzzer', 'whistle1', 'whistle2', 'whistle3']
    const {theme, soundName, setSoundName} = useContext(SettingsContext);
    const [sound, setSound] = useState();


    const sounds = {
        'bell': require('../../../../assets/sounds/bell.mp3'),
        'airhorn1': require('../../../../assets/sounds/airhorn1.mp3'),
        'airhorn2': require('../../../../assets/sounds/airhorn2.mp3'),
        'buzzer': require('../../../../assets/sounds/buzzer.mp3'),
        'whistle1': require('../../../../assets/sounds/whistle1.mp3'),
        'whistle2': require('../../../../assets/sounds/whistle2.mp3'),
        'whistle3': require('../../../../assets/sounds/whistle3.mp3')
    }

    async function playSound(chosenSound) {
        const { sound } = await Audio.Sound.createAsync(sounds[chosenSound]);
        setSound(sound);
        await sound.playAsync();
      }
    

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight style={styles.close}  onPress={()=>{slideOut(animPos)}} activeOpacity={0.4} underlayColor={'#3f4b63'}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>Pick your signal to switch exercise</Text>
               <Text style={styles.title}>Press and hold to sample</Text>
               <View style={styles.soundOptionsBox}>  
                    {
                        soundOptions.map((sound)=>{
                            return (
                                <TouchableHighlight style={[sound === soundName ? styles.activeOption : styles.soundOption]} activeOpacity={0.4} underlayColor={'#3f4b63'} onLongPress={()=>{playSound(sound)}} key={sound} onPress={()=>{setSoundName(sound)}}>
                                    <Text id={sound} style={[sound === soundName ? styles.activeText : styles.normalText]}>{sound.toUpperCase()}</Text>
                                </TouchableHighlight>
                            )
                        })
                    }
               </View>
            </Animated.View>

    )
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        width: '100%',
        height: '100%',
        backgroundColor: '#4b5975',
        zIndex: 10,
        alignItems: 'center',
        padding: 30,
        paddingTop: 60,
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 15,
        borderRadius: 50,
    },  
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    soundOptionsBox: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 30,
        overflow: 'scroll',
    },
    soundOption: {
        width: '90%',
        borderColor: '#c4cfc0',
        marginTop: 17,
        borderWidth: 2,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    activeOption: {
        width: '90%',
        borderColor: '#4b7553',
        backgroundColor: '#2f384a',
        marginTop: 15,
        borderWidth: 2,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 400,
    },
    activeText: {
        fontSize: 15,
        color: '#458251',
        fontWeight: 700,
    }
})
