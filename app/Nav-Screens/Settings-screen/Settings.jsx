import { useState, useContext, useRef } from "react";
import { Text, View, TouchableHighlight, Animated, Easing, Image} from "react-native";
import styled from "styled-components/native";


import { SettingsContext } from "./settingsContext";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';


// import the settings screens

import AnimatedSoundsModal from './Settings-Modals/Sounds';
import AnimatedAboutModal from './Settings-Modals/About';
import AnimatedCoffeesModal from './Settings-Modals/Coffee'
import AnimatedFeedbackModal from './Settings-Modals/Feedback'
import AnimatedGuideModal from './Settings-Modals/Guide';


import BannerAd from '../Ad-Banners/bannerAd';

const logo = require ('./kofi_symbol.png')


const OptionsWindow = styled.View`
    width: 90%;
    height: 90%;
    background-color: "#bab150";
    position: fixed;
    right: 110%;
`


const OptionsButton = styled.TouchableHighlight`
    width: 90%;
    height: 9%;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-basis: space-around;
    margin: 10px 0px;
`

const ButtonText = styled.Text`
    color: white;
    font-weight: 400;
    font-size: 15px;
`


export default function Settings() {

    const { theme, soundName, setSoundName, slideIn, slideOut, guidePos, soundsPos, aboutPos, coffeePos, feedbackPos } = useContext(SettingsContext);


    return (
        <>
            <View
            style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#75744b",
                paddingBottom: '20%'
            }}
            >
                <OptionsButton underlayColor={'#9c9a65'} onPress={()=>{slideIn(guidePos)}} id="Guide">
                    <>
                        <ButtonText>Guide</ButtonText>
                        <FontAwesomeIcon icon={faInfo} style={{color: 'white', marginLeft: 30}}/>
                    </>
                </OptionsButton>
                <OptionsButton underlayColor={'#9c9a65'} onPress={()=>{slideIn(soundsPos)}} id="Sounds">
                    <>
                        <ButtonText>Sounds</ButtonText>
                        <FontAwesomeIcon icon={faMusic} style={{color: 'white', marginLeft: 30}}/>
                    </>
                </OptionsButton>
                <OptionsButton underlayColor={'#9c9a65'} onPress={()=>{slideIn(coffeePos)}} id="Coffee">
                    <>
                        <ButtonText>Buy me a coffee</ButtonText>
                        <Image source={logo} style={{width:30, height:24, marginLeft: 30}}/>
                    </>
                    
                </OptionsButton>
                <OptionsButton underlayColor={'#9c9a65'} onPress={()=>{slideIn(feedbackPos)}} id="Feedback">
                    <>
                        <ButtonText>Send a suggestion </ButtonText>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: 'white', marginLeft: 30}}/>
                    </>
                </OptionsButton>
                <OptionsButton underlayColor={'#9c9a65'} onPress={()=>{slideIn(aboutPos)}} id="About">
                    <>
                        <ButtonText>About</ButtonText>
                        <FontAwesomeIcon icon={faQuestion} style={{color: 'white', marginLeft: 30}}/>
                    </>
                </OptionsButton>
                <BannerAd />
            </View>
            <AnimatedGuideModal animPos={guidePos} slideOut={slideOut} />
            <AnimatedSoundsModal animPos={soundsPos} slideOut={slideOut}/>
            <AnimatedAboutModal animPos={aboutPos} slideOut={slideOut}/>
            <AnimatedCoffeesModal animPos={coffeePos} slideOut={slideOut}/>
            <AnimatedFeedbackModal animPos={feedbackPos} slideOut={slideOut}/>
        </>
    )
}