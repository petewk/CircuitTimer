import { useState, useContext, useRef } from "react";
import { Text, View, ScrollView, TouchableHighlight, Image, Animated, FlatList } from "react-native";
import styled from "styled-components/native";


export const TimeSelectorScroll = () => {


    let timeOptions = [...Array(120).keys()]




    return (
        <ScrollView
        contentContainerStyle={{
            height:100,
            width: 100,
            borderColor: 'white',
            borderWidth: 1,
            position: 'relative',
            zIndex: 10,
        }}
        nestedScrollEnabled
    >
        {
            timeOptions.map((time)=>{
                return(
                    <View onPress={()=>{console.log('touch')}} key={timeOptions.indexOf(time)} >
                        <Text style={{textAlign: 'center', fontSize:40, color: 'white'}}>{time}</Text>    
                    </View>
                )
            })
        }
    </ScrollView>
    )
}