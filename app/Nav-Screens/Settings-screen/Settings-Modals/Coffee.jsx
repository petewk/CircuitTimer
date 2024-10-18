import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet, Linking, Image } from "react-native";
import styled from "styled-components/native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';

const button = require('../support_me_on_kofi_beige.png')


export const AnimatedCoffeesModal = ({animPos, slideOut}) => {



    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>Buy me a coffee!</Text>
               <View style={{justifyContent: 'space-evenly', height: '90%', width: '100%', textAlign: 'center'}}>
                <Text style={styles.textBody}>If you've used my app and found it useful, and would like to buy me a flat white to show your appreciation, it's always welcome!</Text>
                <Text style={styles.textBody}>Just click the button below to head to my Ko-fi page where you can do so</Text>
                <TouchableHighlight style={styles.kofiLink} underlayColor={'#596785'} onPress={()=>{Linking.openURL('https://ko-fi.com/pkcode')}}>
                        <Image source={button} resizeMode="contain" style={{width: '100%', height: '100%', margin: 0}}/>
                </TouchableHighlight>       
                <Text style={styles.textBody}>Thank you very much!</Text>
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
        paddingTop: 50,
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 5,
    },   
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    textBody: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    kofiLink: {
        width: '100%',
        textAlign: 'center',
        height: 80
    }
})