import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet, Linking, Image } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';



const RNLogo = require('../../../../assets/images/react-logo.png');
const pixabayLogo = require('../../../../assets/images/pixabayLogo.png');
const admobLogo = require('../../../../assets/images/google-admob.png')



export default AnimatedGuideModal = ({animPos, slideOut}) => {

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight activeOpacity={0.4} underlayColor={'#3f4b63'} style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faCircleXmark} /></TouchableHighlight>
                <Text>How to use Circuits</Text>
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

})