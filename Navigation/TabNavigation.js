import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, StoreStackNavigation } from "./StackStore";
import Feather from "react-native-vector-icons/Feather";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Main") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Store") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          } else if (route.name === "Detail") {
            iconName = focused ? "clipboard" : "clipboard";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown:false
      })}
    >
      <Tab.Screen name="Main" component={MainStackNavigator} />
      <Tab.Screen name="Store" component={StoreStackNavigation} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
