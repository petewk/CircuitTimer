import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet, Linking, Image } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';



const RNLogo = require('../../../../assets/images/react-logo.png');
const pixabayLogo = require('../../../../assets/images/pixabayLogo.png');
const admobLogo = require('../../../../assets/images/google-admob.png')



export default AnimatedAboutModal = ({animPos, slideOut}) => {

    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight activeOpacity={0.4} underlayColor={'#3f4b63'} style={styles.close}  onPress={()=>{slideOut(animPos)}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={20} icon={faCircleXmark} /></TouchableHighlight>
               <Text style={styles.title}>About Circuits</Text>
               {/* <TouchableHighlight style={styles.linkBox} onPress={()=>{console.log('needs hooking up')}}>
                    <Text style={styles.linkText}>Made by Pkcode ltd</Text>
               </TouchableHighlight> */}
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://reactnative.dev')}}>
                <>
                    <Image style={styles.linkImg} source={RNLogo}/>
                    <Text style={styles.linkText}>Built with React Native</Text>
                </>
               </TouchableHighlight>
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://pixabay.com/')}}>
                    <>
                        <Image style={styles.linkImg} source={pixabayLogo}/>
                        <Text style={styles.linkText}>Sounds by Pixabay</Text>
                    </>
               </TouchableHighlight>
               <TouchableHighlight style={styles.linkBox} onPress={()=>{Linking.openURL('https://admob.google.com/home/')}}>
                <>
                    <Image style={styles.linkImg} source={admobLogo}/>
                    <Text style={styles.linkText}>Adverts by Admob - Google</Text>
                </>
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
    linkBox:{
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        width: '95%',
        height: 95,
        marginBottom: 20,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center'

    },
    linkText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkImg: {
        position: 'absolute',
        left: 'auto',
        right: 'auto',
        opacity: 0.2,
        alignSelf: 'center',
        width: 75,
        height: 75,
    }
})