import { useState, useContext, useRef } from "react";
import { Text, View, ScrollView, TouchableHighlight, Image, Animated, FlatList } from "react-native";
import styled from "styled-components/native";


import { CircuitContext } from "../context/circuitContextProvidor";
import TimeSelectorScroll from "./scrollSelector";


const ActivityContainer = styled.View`
    width: 100px;
    height: 100px;
    margin: 10px;
    color: white;   
    padding-top: 0px;
    overflow: hidden;
    align-items: flex-start;
`

const ActivitySection = styled.TouchableHighlight`
    width: 100px;
    height: 100px;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const ActivityImage = styled.Image`
    width: 40px;
    height: 40px;
    color: white;
    border: 1px solid white;
`


export default ActivityOption = ({route, thisActivity}) => {

    
    const {startCircuits, addExercise} = useContext(CircuitContext);
    const [position, setPosition] = useState(0);
    const [display, setDisplay] = useState('flex');


    const icons = ["default", "highknees", "jumprope", "kettlebellswings", "lunges", "planks", "pressups", "situps"]
    const routes = ["./activityIcons/exercise.png", "./activityIcons/highknees.png", "./activityIcons/jumprope.png", "./activityIcons/kettlebellswings.png", 
        "./activityIcons/lunges.png", "./activityIcons/planks.png", "./activityIcons/pressups.png", "./activityIcons/situps.png"]




    function timerSlide(){
        if(display === 'flex'){
            setDisplay('none');
            // setTimeout(()=>{
            //     setDisplay('flex')
            // }, 5000)
        } else {
            setDisplay('flex')
        }
    }


    return (

        <ActivityContainer >
            <View>
                <ActivitySection style={{display: display, justifyContent: 'flex-start', textAlign: 'center'}} activeOpacity={0.5} underlayColor={'#41464d'} onPress={timerSlide}>
                    <>
                        {
                            route === undefined ?
                            <ActivityImage resizeMode={'stretch'} source={require('./activityIcons/exercise.png')}/>
                            
                            :
                            <ActivityImage resizeMode={'stretch'} source={route}/>
                        }
                        <Text style={{color: 'white', textAlign: 'center', marginTop: 5}}>{thisActivity}</Text>
                    </>
                </ActivitySection>
                <TimeSelectorScroll name={thisActivity} timerSlide={timerSlide}/>

            </View>
        </ActivityContainer>
    )

}