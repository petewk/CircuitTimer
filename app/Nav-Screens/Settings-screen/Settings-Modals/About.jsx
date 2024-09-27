import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';



export const AnimatedAboutModal = ({animPos, slideOut}) => {

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0', fontSize:'20px'}} size={40} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>About Page</Text>
               <Text>Made by Pkcode ltd</Text>
               <Text>Built with React Native</Text>
               <Text>Sounds by whatever</Text>
               <Text>Adverts by something</Text>
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
        padding: 30
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 5,
    },   
    title: {
        fontSize: 20
    }
})