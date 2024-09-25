import React, { useState, useContext, createContext, useEffect } from "react";
import { Vibration } from "react-native";

import { CircuitContext } from "../../Circuits-screen/context/circuitContextProvidor";
import { SettingsContext } from "../../Settings-screen/settingsContext";

import { Audio } from 'expo-av';

import {soundsList} from '../../Settings-screen/soundNames';



export const TimerContext = createContext();




export const TimerContextProvider = ({children})=>{
    
    const { theme, soundName } = useContext(SettingsContext)
    const { circuits } = useContext(CircuitContext)
    
    
    const [flash, setFlash] = useState(false);
    const [roundNum, setRoundNum] = useState(0)
    const [secondsLeft, setSeconds] = useState(circuits[roundNum].duration);
    const [paused, setPaused] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    const [finished, setFinished] = useState(false);
    
    
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
        
        const { sound } = await Audio.Sound.createAsync(chosenSound);
        setSound(sound);
        await sound.playAsync();
      }
    
      useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);



    

    function playPause(){
        setPaused(!paused)
    }
    
    function flashScreen(wait, duration){
        setFlash(true)
        setTimeout(()=>{
            setFlash(false)
            setTimeout(()=>{
                setFlash(true)
                setTimeout(()=>{
                    setFlash(false)
                }, duration)
            }, wait)
        }, duration)
    }

    function endEx(){
        console.log(`round ${roundNum +1} of ${circuits.length} finished` )
        playSound(sounds[soundName])
        playPause();
        let nextroundnum = roundNum +1;
        if(roundNum +1 >= circuits.length){
            console.log("You're done, great job")
            playPause();
            setFinished(true);
            return
        }
        if(autoPlay){
            setTimeout(()=>{
                setPaused(false)
            }, 5000)
        }
        flashScreen(200, 400)
        Vibration.vibrate([200, 400, 200, 400])

        if(circuits[nextroundnum]){
            setRoundNum(nextroundnum);
            let nextSecs = circuits[nextroundnum].duration;
            setSeconds(nextSecs)
        }
    }

    useEffect(()=>{
        const counter = setTimeout(()=>{
            if(!paused){
                if(secondsLeft >= 1){
                    setSeconds(secondsLeft-1);
                } else {
                    endEx()
                }
            }
        }, 500)
    }, [secondsLeft, paused, roundNum])


    return (
        <TimerContext.Provider
            value={{
                flash,
                secondsLeft,
                paused,
                playPause,
                roundNum,
                autoPlay,
                setAutoPlay,
                finished
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}