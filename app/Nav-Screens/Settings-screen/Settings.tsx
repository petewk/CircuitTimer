import { Text, View, TouchableHighlight} from "react-native";
import styled from "styled-components/native";

const OptionsWindow = styled.View`
    width: 90%;
    height: 90%;
    background-color: "#75744b";
    position: fixed;
    right: 110%;
`


const OptionsButton = styled.TouchableHighlight`
    width: 90%;
    height: 10%;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: space-around;
    margin: 20px 0px;
`


export default function Settings() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#75744b"
          }}
          >
            <Text>This is where you get to the settings</Text>
            <OptionsButton><Text>Theme</Text></OptionsButton>
            <OptionsButton><Text>Sounds</Text></OptionsButton>
            <OptionsButton><Text>About</Text></OptionsButton>
            <OptionsButton><Text>Buy me a coffee</Text></OptionsButton>
        </View>
    )
}