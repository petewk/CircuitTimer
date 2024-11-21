import { useState, useEffect, useRef } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";


export default BannerAd = () => {
    return (
        <View style={styles.bannerAd}>
            <Text style={{color: 'white', textAlign: 'center'}}>Advert going here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerAd: {
        position: 'absolute',
        bottom: 10,
        color: 'white',
        backgroundColor: 'black',
        width: 320,
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
    }
})