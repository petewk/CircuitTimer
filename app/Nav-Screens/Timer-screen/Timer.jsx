import { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';

// Contexts
import { TimerContext } from "./context/timerContext";
import { CircuitContext } from "../Circuits-screen/context/circuitContextProvidor";



import {
    useFonts,
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold,
  } from '@expo-google-fonts/oxygen';



export default function Timer() {

    const { flash, secondsLeft, paused, playPause, roundNum, autoPlay, setAutoPlay} = useContext(TimerContext);
    const {circuits} = useContext(CircuitContext);
    



    const flashColors = {
        true: '#ab2626',
        false: '#4b7553'
    }


    let [fontsLoaded] = useFonts({
        Oxygen_300Light,
        Oxygen_400Regular,
        Oxygen_700Bold,
      });

      if(!fontsLoaded){
        return null
      } else    {
        return (
            <View id=""
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: flashColors[flash],
                paddingTop: 30,
                paddingBottom: 100,
                fontFamily: 'Oxygen_700Bold'
              }}>
                <View style={styles.thisRound}>
                    <Text style={{fontSize: 25, color: '#c4cfc0'}}>Exercise {roundNum +1} of {circuits.length}</Text>
                    <Text style={styles.countdown}>{secondsLeft}</Text>
                    <Text style={styles.currentEx}>{circuits[roundNum].exercise}</Text>
                </View>

                        {
                            paused ?
                                <TouchableHighlight style={styles.pressPause} onPress={playPause}>
                                    <Text style={{textAlign: 'center'}}>
                                        <FontAwesomeIcon style={{color: '#c4cfc0', fontSize:'20px'}} size={40} icon={faPlay} />
                                    </Text>
                                </TouchableHighlight>
                            :   
                                <TouchableHighlight style={styles.pressStart} onPress={playPause}>
                                    <Text style={{textAlign: 'center'}}>
                                        <FontAwesomeIcon style={{color: '#ab2626', fontSize:'20px'}} size={40} icon={faPause} />
                                    </Text>
                                </TouchableHighlight>
                                
                        }
                <View style={styles.nextRound}>
                    <Text style={styles.nextText}>Up next: </Text>
                    {
                        !circuits[roundNum+1] ? 
                        <Text style={styles.nextText}>A REST!</Text>
                        :
                        <Text style={styles.nextText}>{circuits[roundNum+1].exercise}</Text>
    
                    }
                </View>

                <TouchableHighlight onPress={()=>{setAutoPlay(!autoPlay)}}>
                    <>
                        <Text style={{fontSize: 25, color: '#c4cfc0'}}>Pause between rounds?</Text>
                            {
                                autoPlay ? 
                                    <Text style={{textAlign: 'center', width: 'inherit', paddingTop: 40}}><FontAwesomeIcon style={{color: '#ab2626', fontSize:'20px'}} size={40} icon={faCircleXmark} /></Text>
                                :
                                    <Text style={{textAlign: 'center', width: 'inherit', paddingTop: 40}}><FontAwesomeIcon style={{color: '#c4cfc0', fontSize:'20px'}} size={40} icon={faCircleCheck} /></Text>
                            }
                    </>
                </TouchableHighlight>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    thisRound:{
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        fontFamily: 'Oxygen_700Bold'
    },
    currentEx: {
        color: '#c4cfc0',
        fontSize: 50,
        fontFamily: 'Oxygen_700Bold'
    },
    pressStart:{
        height: '100px',
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#ffffff20',
        fontFamily: 'Oxygen_700Bold',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ab2626',
        borderRadius: 10

    },
    pressPause:{
        height: '100px',
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#ffffff20',
        fontFamily: 'Oxygen_700Bold',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#c4cfc0',
        borderRadius: 10

    },
    countdown: {
        fontSize: 75,
        color: '#c4cfc0'
    },
    nextRound: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        fontFamily: 'Oxygen_700Bold'
    },
    nextText: {
        fontSize: 25,
        color: '#c4cfc0',
        fontFamily: 'Oxygen_700Bold'
    }
})