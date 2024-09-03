import { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

// Contexts
import { TimerContext } from "./context/timerContext";
import { CircuitContext } from "../Circuits-screen/context/circuitContextProvidor";







export default function Timer() {

    const {activityNum} = useContext(TimerContext);
    const {circuits} = useContext(CircuitContext);

    const [timeLeft, setTimeLeft] = useState(circuits[0].duration)


    const countdownInt = setInterval(()=>{
        setTimeLeft(timeLeft -1)
    }, 1000);
    
    if(timeLeft === 0){
        clearInterval(countdownInt)
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