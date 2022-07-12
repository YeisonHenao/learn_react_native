import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//componentes
import Home from "../Screens/Home";
import Store from "../Screens/Store";
import DetailStore from "../Screens/DetailStore";
import ShoppingCart from "../Screens/ShoppingCart";
import ConfigurationView from "../Screens/ConfigurationView";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const StoreStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#000",
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
        },
      }}
    >
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Detail" component={DetailStore} />
      <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

const ConfigurtionStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Configuration" component={ConfigurationView} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  StoreStackNavigation,
  ConfigurtionStackNavigation,
};
