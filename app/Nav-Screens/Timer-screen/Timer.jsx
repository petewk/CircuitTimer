import { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons/faRotateLeft';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';


// Contexts
import { TimerContext } from "./context/timerContext";
import { CircuitContext } from "../Circuits-screen/context/circuitContextProvidor";
import { SettingsContext } from "../Settings-screen/settingsContext";



import {
    useFonts,
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold,
  } from '@expo-google-fonts/oxygen';



export default function Timer({ navigation }) {

    const { flash, secondsLeft, paused, playPause, roundNum, autoPlay, setAutoPlay, finished, restartCircuit} = useContext(TimerContext);
    const {circuits} = useContext(CircuitContext);
    const {  slideIn, soundsPos } = useContext(SettingsContext);
    

    function toSounds(){
        navigation.navigate('Settings');
        slideIn(soundsPos)
    }


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
                <TouchableHighlight style={styles.toSounds}  onPress={toSounds}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faMusic} /></TouchableHighlight>
                <View style={styles.thisRound}>
                    <Text style={{fontSize: 25, color: '#c4cfc0'}}>Exercise {roundNum +1} of {circuits.length}</Text>

                        {
                            finished ? 
                            <>
                                <Text style={[styles.countdown,{textAlign: 'center'}]}>Great workout!</Text>
                            </>
                            :
                            <>
                                <Text style={styles.countdown}>{secondsLeft}</Text>
                                <Text style={styles.currentEx}>{circuits[roundNum].exercise}</Text>
                            </>
                        }
                </View>

                        {
                            paused ?
                                <TouchableHighlight activeOpacity={0.5} underlayColor={'#ffffff40'} style={styles.pressPause} onPress={playPause}>
                                    <Text style={{textAlign: 'center'}}>
                                        <FontAwesomeIcon style={{color: '#c4cfc0', fontSize:'20px'}} size={40} icon={faPlay} />
                                    </Text>
                                </TouchableHighlight>
                            :   
                                <TouchableHighlight activeOpacity={0.9} underlayColor={'#ffffff40'} style={styles.pressStart} onPress={playPause}>
                                    <Text style={{textAlign: 'center'}}>
                                        <FontAwesomeIcon style={{color: '#ab2626', fontSize:'20px'}} size={40} icon={faPause} />
                                    </Text>
                                </TouchableHighlight>
                                
                        }
                <View style={styles.nextRound}>
                    <Text style={styles.nextText}>Up next: </Text>
                    {
                        !circuits[roundNum+1] ? 
                            finished ? 
                            <TouchableHighlight style={{textAlign: 'center', alignItems:'center'}} onPress={()=>{restartCircuit()}}>
                                <>
                                    <Text style={{fontSize: 25, color: '#c4cfc0'}}>Do it again?</Text>
                                    <FontAwesomeIcon style={{color: '#c4cfc0', marginTop:10, fontSize:'20px'}} size={40} icon={faRotateLeft} />
                                </>
                            </TouchableHighlight>
                            :
                            <Text style={styles.nextText}>A REST!</Text>
                        :
                        <Text style={styles.nextText}>{circuits[roundNum+1].exercise}</Text>
    
                    }
                </View>

                <View>
                        <Text style={{fontSize: 25, color: '#c4cfc0'}}>Pause between rounds?</Text>
                            {
                                autoPlay ? 
                                    <TouchableHighlight activeOpacity={0.9} underlayColor={'#4b7553'} onPress={()=>{setAutoPlay(!autoPlay)}} style={{textAlign: 'center', width: 'inherit', paddingTop: 20, alignItems:'center'}}><FontAwesomeIcon style={{color: '#ab2626', fontSize:'20px'}} size={40} icon={faCircleXmark} /></TouchableHighlight>
                                :
                                    <TouchableHighlight activeOpacity={0.9} underlayColor={'#4b7553'} onPress={()=>{setAutoPlay(!autoPlay)}} style={{textAlign: 'center', width: 'inherit', paddingTop: 20, alignItems:'center'}}><FontAwesomeIcon style={{color: '#c4cfc0', fontSize:'20px'}} size={40} icon={faCircleCheck} /></TouchableHighlight>
                            }
                </View>
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
        height: 50,


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
        height: 50,
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
    },
    toSounds: {
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 5,
    },  
})