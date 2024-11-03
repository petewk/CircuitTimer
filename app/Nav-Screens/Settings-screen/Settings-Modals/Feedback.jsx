import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet, Touchable, Linking } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';



export const AnimatedFeedbackModal = ({animPos, slideOut}) => {

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight  activeOpacity={0.4} underlayColor={'#3f4b63'} style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>Let me know what you think!</Text>
               <Text style={styles.textBody}>I'd always be happy to hear if there's a feature that will help make this app more useful for people!</Text>
               <Text style={styles.textBody}>Press the button below to drop us an email if there's something you think would improve this app.</Text>
               <TouchableHighlight style={styles.feedbackLink} onPress={()=>{Linking.openURL(`mailto:pkcodeltd@gmail.com`)}}>
                    <Text style={styles.buttonText}>Drop us an email</Text>
               </TouchableHighlight>
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
        justifyContent: 'space-evenly',
        paddingBottom: 100
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
        color: 'white',
        fontWeight: '700',
        marginBottom: 30,
        marginTop: 30,
    },
    textBody: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 30,
    },
    feedbackLink: {
        width: '90%',
        height: '10%',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 'space-around',
        marginTop: 30,
        marginBottom: 30,
    },
    buttonText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 17,
        textDecorationLine: 'underline'
    }
})