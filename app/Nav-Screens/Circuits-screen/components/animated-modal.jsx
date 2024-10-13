import { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableHighlight, Animated, StyleSheet } from "react-native";
import styled from "styled-components/native";


import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'


// import exercise list
import exercises from './exercises'

// import activity option
import { ActivityOption } from "./activity-option";


import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';

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
    padding-top: 40px;
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



    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(exercises.length/12))


    let itemstoShow = exercises.slice((currentPage -1)*12, currentPage * 12)
    
    function pageDown(){
        holder = currentPage-1;
        if(currentPage > 1){
            setCurrentPage(holder)
        }
    }
    
    function pageUp(){
        holder = currentPage +1;
        if(exercises.length > 12*currentPage){
            setCurrentPage(holder)
        }
    }
    

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
                <TouchableHighlight style={styles.close}  onPress={()=>{slideOut()}}><FontAwesomeIcon style={{color: '#c4cfc0'}} size={'20px'} icon={faCircleXmark} /></TouchableHighlight>
                    <ButtonsList
                    contentContainerStyle={{alignItems:'center'}}
                    renderItem={({item})=><ActivityOption thisActivity={item}/>}
                    data={itemstoShow} 
                    numColumns={3}
                    />
                </InnerContainer>

                {/* PAGE NUMS SECTIONS */}
                <View style={{transform:[{translateY: -50}], flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                    <TouchableHighlight onPress={pageDown} style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon style={{color: 'white', margin:15}} icon={faAngleLeft}/></TouchableHighlight>
                    <Text style={{color: 'white', textAlign: 'center'}}>{currentPage} / {totalPages}</Text>
                    <TouchableHighlight onPress={pageUp} style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon style={{color: 'white', margin:15}} icon={faAngleRight}/></TouchableHighlight>
                </View>
            </Animated.View>

    )
}

const styles = StyleSheet.create({
    close: {
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 5,

    }   
})