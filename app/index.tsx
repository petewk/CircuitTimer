import { Text, View } from "react-native";
import { Link } from "expo-router";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

// import screens
import Circuits from "./Nav-Screens/Circuits";
import Timer from "./Nav-Screens/Timer";
import Settings from "./Nav-Screens/Settings";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";


const homeStack = createMaterialTopTabNavigator()

export default function Index() {
  return (
      <NavigationContainer independent={true}>
        <homeStack.Navigator 
          initialRouteName="Timer"
          >
          <homeStack.Screen options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faList} />
            )
          }} name="Circuits" component={Circuits}/>

          <homeStack.Screen options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faStopwatch} />
            )
          }}
          name="Timer" component={Timer}/>
          
          <homeStack.Screen options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faGear} />
            )
          }}
          name="Settings" component={Settings}/>
        </homeStack.Navigator>
      </NavigationContainer>
  );
}
