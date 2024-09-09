import { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

// Contexts
import { TimerContext } from "./context/timerContext";
import { CircuitContext } from "../Circuits-screen/context/circuitContextProvidor";



export default function Timer() {

    const {activityNum, secondsLeft, startTimer, flash, paused} = useContext(TimerContext);
    const {circuits} = useContext(CircuitContext);

    const [timeLeft, setTimeLeft] = useState();
    

    useEffect(()=>{
        console.log(secondsLeft)
        
    }, [secondsLeft])

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
                <Text style={{fontSize: 25, color: 'grey'}}>{activityNum +1} / {circuits.length}</Text>
                <Text style={styles.countdown}>{secondsLeft}</Text>
                <Text style={styles.currentEx}>{circuits[activityNum].exercise}</Text>
            </View>
            <TouchableHighlight style={styles.pressStart} onPress={startTimer}>
                <Text style={{textAlign: 'center'}}>
                    {
                        paused ? 
                        <FontAwesomeIcon icon={faPause} />
                        :
                        <FontAwesomeIcon icon={faPlay} />
                    }
                </Text>
            </TouchableHighlight>
            <View style={styles.nextRound}>
                <Text style={styles.nextText}>Up next: </Text>
                <Text style={styles.nextText}>{circuits[activityNum +1].exercise}</Text>
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