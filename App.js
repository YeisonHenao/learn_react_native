import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './src/Navigation/TabNavigation'

const App = () => {
  return(
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default App;