import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet, Linking, Image } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';



const RNLogo = require('../../../../assets/images/react-logo.png');
const pixabayLogo = require('../../../../assets/images/pixabayLogo.png');
const admobLogo = require('../../../../assets/images/google-admob.png')



export default AnimatedGuideModal = ({animPos, slideOut}) => {

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight activeOpacity={0.4} underlayColor={'#3f4b63'} style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faCircleXmark} /></TouchableHighlight>
                <Text style={styles.title}>How to use Circuits</Text>
                <Text style={styles.guideBody}>Just in case you got stuck</Text>
                <Text style={styles.guideBody}>You can add new exercises to your circuit using the <FontAwesomeIcon style={{color: '#c4cfc0', transform: [{translateY: 4}]}} size={20} icon={faPlus}/> button, or remove them by pressing on the <FontAwesomeIcon style={{color: '#c4cfc0', transform: [{translateY: 4}]}} size={18} icon={faTrashCan} /> logo</Text>
                <Text style={styles.guideBody}>For each exercise you select you can select a duration using the scroll dial once you press the exercise</Text>
                <Text style={styles.guideBody}>You can choose whether the app will pause for you between, or if you want to just keep going from one to the next</Text>
                <Text style={styles.guideBody}>You can change the alert sound in the Settings screen</Text>
                <Text></Text>
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
        paddingTop: 50,
        justifyContent: 'space-evenly'
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 5,
        borderRadius: 50,
    },   
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
    },
    guideBody: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 30,
    }

})