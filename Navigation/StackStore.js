import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//componentes
import Home from "../Screens/Home";
import Store from "../Screens/Store";
import DetailStore from "../Screens/DetailStore";
import ShoppingCart from "../Screens/ShoppingCart";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const StoreStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Detail" component={DetailStore} />
    </Stack.Navigator>
  );
};

const ShoppingCartNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, StoreStackNavigation , ShoppingCartNavigation };
