import { useContext } from "react";
import { Text, TouchableHighlight, Animated, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { SettingsContext } from "../settingsContext";


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';


export const AnimatedSoundsModal = ({animPos, slideOut}) => {

    const soundOptions = ['bell', 'airhorn1', 'airhorn2', 'buzzer', 'whistle1', 'whistle2', 'whistle3']
    const {theme, soundName, setSoundName} = useContext(SettingsContext);


    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0', fontSize:'20px'}} size={40} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>Pick your End of Exercise alert sound</Text>
               <View style={styles.soundOptionsBox}>  
                    {
                        soundOptions.map((sound)=>{
                            return (
                                <TouchableHighlight style={[sound === soundName ? styles.activeOption : styles.soundOption]} activeOpacity={0.4} underlayColor={'#3f4b63'} onLongPress={()=>{console.log(sound)}} id={sound} onPress={()=>{setSoundName(sound)}}>
                                    <Text style={[sound === soundName ? styles.activeText : styles.normalText]}>{sound.toUpperCase()}</Text>
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
    },  
    title: {
        fontSize: 20
    },
    soundOptionsBox: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    soundOption: {
        width: '90%',
        borderColor: '#c4cfc0',
        marginTop: 15,
        borderWidth: 2,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    activeText: {
        fontSize: 15,
        color: '#4b7553',
        fontWeight: 700,
    }
})
