import { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

// Contexts
import { TimerContext } from "./context/timerContext";
import { CircuitContext } from "../Circuits-screen/context/circuitContextProvidor";



export default function Timer() {

    const {activityNum} = useContext(TimerContext);
    const {circuits} = useContext(CircuitContext);

    const [timeLeft, setTimeLeft] = useState();
    

    function startTimer(){
       setTimeLeft(circuits[activityNum].duration); 
        setInterval(()=>{
            holder = timeLeft -1;
            setTimeLeft(holder);
        }, 1000)
    }


    
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#4b7553",
            paddingTop: 30,
            paddingBottom: 100,
          }}>
            <View style={styles.thisRound}>
                <Text>{activityNum}</Text>
                <Text style={styles.countdown}>{timeLeft}</Text>
                <Text style={styles.currentEx}>{circuits[activityNum].exercise}</Text>
            </View>
            <TouchableHighlight style={{height: 40}} onPress={startTimer}><Text>Press to start</Text></TouchableHighlight>
            <View style={styles.nextRound}>
                <Text>Up next: </Text>
                <Text>{circuits[activityNum +1].exercise}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    thisRound:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'white',
    },
    currentEx: {
        color: 'grey',
        fontSize: 50
    },

    countdown: {
        fontSize: 75,
        color: 'grey'
    },
    nextRound: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1
    }
})