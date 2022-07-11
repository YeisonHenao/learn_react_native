import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

//componentes
import Home from "../Screens/Home";
import Store from '../Screens/Store'
import DetailStore from '../Screens/DetailStore'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name = "Principal" component={Home} />
        </Stack.Navigator>
    );
}

const StoreStackNavigation = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name = "Tienda" component={Store} />
            <Stack.Screen name = "Detail" component={DetailStore} />
        </Stack.Navigator>
    );
}

export {MainStackNavigator , StoreStackNavigation };