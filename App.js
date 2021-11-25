import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './Navigation/TabNavigation'


const App = () => {
  return(
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}


export default App;