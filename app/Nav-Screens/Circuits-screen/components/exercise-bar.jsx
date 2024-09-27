import { Text, View, TouchableHighlight, Animated, Easing, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useContext, useRef } from "react";
import { CircuitContext } from "../context/circuitContextProvidor";

import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';



import {
    useFonts,
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold,
  } from '@expo-google-fonts/oxygen';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



const ActivityContainer = styled.View`
    border: 1px solid white;
    border-radius: 5px;
    min-width: 90%;
    height: 40px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-basis: flex-end;
    justify-content: space-around;
    align-items: center;
    `


const ActivityText = styled.Text`
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 17px;
    font-family: Oxygen_400Regular;
    color: white;

    
`

export const ExerciseBar = ({activity, index}) => {

    const context = useContext(CircuitContext);
    const deleteFunc = context.deleteExercise;


    const slideAnim = useRef(new Animated.Value(0)).current;

    let [fontsLoaded] = useFonts({
        Oxygen_300Light,
        Oxygen_400Regular,
        Oxygen_700Bold,
      });

      function slideBar(value, duration){
        Animated.timing(slideAnim, {
          toValue: value,
          duration: duration,
          Easing,
          useNativeDriver: true
        }).start()
      }

      function removeBar(index){
        slideBar(-500, 400)
        deleteFunc(index);
        // setTimeout(()=>{
        //   slideBar(0, 0)
        // },400)
      }
      

      if(!fontsLoaded){
        return null
      } else {
    return (
        <Animated.View style={[styles.exerciseBar, {transform: [{translateX: slideAnim}]}]}>
            <ActivityText style={{flex:1}}>{index +1}.</ActivityText>
            <ActivityText style={{flex:4}}>{activity.exercise}</ActivityText>
            <ActivityText style={{flex:2}}>{activity.duration}s</ActivityText>
            <TouchableHighlight style={{flex:1}} onPress={()=>{removeBar(index)}}><Text style={{fontSize: 20,color:'black', textAlign: 'center'}}><FontAwesomeIcon icon={faTrashCan} style={{color: '#c4cfc0'}}/></Text></TouchableHighlight>
            
        </Animated.View>
    )
}
} 


const styles = StyleSheet.create({
  exerciseBar: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    borderStyle: 'solid',
    minWidth: '90%',
    height: 40,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    flexBasis: 'flex-end',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
})