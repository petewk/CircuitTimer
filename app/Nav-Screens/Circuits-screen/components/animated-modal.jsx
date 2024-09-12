import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated } from "react-native";
import styled from "styled-components/native";





// import exercise list
import exercises from './exercises'

// import activity option
import { ActivityOption } from "./activity-option";

const SelectionWindow = styled.View`
    width: 90%;
    height: 90%;
    background-color: #1c1e21;
    border: 1px solid white;
    position: absolute;
    z-index: 10;
    border-radius: 10px;
`

const InnerContainer = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    overflow-y: scroll;
`

const CloseButton = styled.TouchableHighlight`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
    border: 1px solid white;
`

const ButtonsList = styled.FlatList`
    display: flex;
    margin: 25px auto;
`


export const AnimatedSelectionModal = ({slideOut, slideAnim}) => {


    console.log(slideOut)
    

    return (


        <Animated.View style={{
            position: "absolute",
            width: '90%',
            height: '90%',
            backgroundColor: '#1c1e21',
            position: 'absolute',
            zIndex: 10,
            transform: [{
                translateX: slideAnim
            }]
        }}>
                <InnerContainer>
                    <CloseButton onPress={slideOut}><Text style={{color:'white'}}>X</Text></CloseButton>
                    <ButtonsList
                    contentContainerStyle={{alignItems:'center'}}
                    renderItem={({item})=><ActivityOption thisActivity={item}/>}
                    data={exercises} 
                    numColumns={3}
                    />
                </InnerContainer>
            </Animated.View>

    )
}