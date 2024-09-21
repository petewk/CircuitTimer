import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet } from "react-native";
import styled from "styled-components/native";


import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'



export const AnimatedCoffeesModal = ({animPos, slideOut}) => {



    return (


        <Animated.View style={[styles.container, {transform: [{translateX: animPos}]}]}>
               <TouchableHighlight style={styles.close} onPress={()=>{slideOut(animPos)}}><Text style={{fontSize: 20}}>X</Text></TouchableHighlight>
               <Text style={styles.title}>Coffees Page</Text>
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
    },  
    title: {
        fontSize: 20
    }
})