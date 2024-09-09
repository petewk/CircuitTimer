import { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

// Contexts
import { TimerContext } from "./context/timerContext";
import { CircuitContext } from "../Circuits-screen/context/circuitContextProvidor";




export default function Timer() {

    const { flash, secondsLeft, paused, playPause, roundNum} = useContext(TimerContext);
    const {circuits} = useContext(CircuitContext);
    



    const flashColors = {
        true: '#ab2626',
        false: '#4b7553'
    }


    
    return (
        <View id=""
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: flashColors[flash],
            paddingTop: 30,
            paddingBottom: 100,
          }}>
            <View style={styles.thisRound}>
                <Text style={{fontSize: 25, color: 'grey'}}>{roundNum +1}</Text>
                <Text style={styles.countdown}>{secondsLeft}</Text>
                <Text style={styles.currentEx}>{circuits[roundNum].exercise}</Text>
            </View>
            <TouchableHighlight style={styles.pressStart} onPress={playPause}>
                <Text style={{textAlign: 'center'}}>
                    <FontAwesomeIcon icon={faPlay} />
                </Text>
            </TouchableHighlight>
            <View style={styles.nextRound}>
                <Text style={styles.nextText}>Up next: </Text>
                {
                    !circuits[roundNum+1] ? 
                    <Text style={styles.nextText}>A REST!</Text>
                    :
                    <Text style={styles.nextText}>{circuits[roundNum+1].exercise}</Text>

                }
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    thisRound:{
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'white',
        width: '100%'
    },
    currentEx: {
        color: 'grey',
        fontSize: 50
    },
    pressStart:{
        height: '100px',
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#ffffff20'

    },
    countdown: {
        fontSize: 75,
        color: 'grey'
    },
    nextRound: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        width: '100%',
    },
    nextText: {
        fontSize: 25,
        color: 'grey',
    }
})