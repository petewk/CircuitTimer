import { Text, View } from "react-native";
import { Link } from "expo-router";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import Circuits from "./Nav-Screens/Circuits";
import Timer from "./Nav-Screens/Timer";
import Settings from "./Nav-Screens/Settings";


const homeStack = createNativeStackNavigator()

export default function Index() {
  return (
      <NavigationContainer independent={true}>
        <homeStack.Navigator initialRouteName="Timer">
          <homeStack.Screen name="Circuits" component={Circuits}/>
          <homeStack.Screen name="Timer" component={Timer}/>
          <homeStack.Screen name="Settings" component={Settings}/>
        </homeStack.Navigator>
      </NavigationContainer>
  );
}
