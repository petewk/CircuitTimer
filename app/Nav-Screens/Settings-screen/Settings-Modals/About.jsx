import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet, Linking } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';







export const AnimatedAboutModal = ({animPos, slideOut}) => {

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={'20px'} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>About Page</Text>
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://google.com')}}>
                    <Text>Made by Pkcode ltd</Text>
               </TouchableHighlight>
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://reactnative.dev')}}>
                    <Text>Built with React Native</Text>
               </TouchableHighlight>
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://pixabay.com/')}}>
                    <Text>Sounds by Pixabay</Text>
               </TouchableHighlight>
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://admob.google.com/home/')}}>
                    <Text>Adverts by Admob - Google</Text>
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
        paddingTop: 50
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 5,
    },   
    title: {
        fontSize: 20
    },
    linkBox:{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        width: '95%',
        height: 95,
        marginBottom: 20,
        padding: 10

    }  
})