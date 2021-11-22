import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from "react-native-vector-icons/Feather";

//Screens
import HomeScreen from "./Screens/Home";
import StoreScreen from "./Screens/Store";
import DetailStore from "./Screens/DetailStore";


  const StoreStack = createNativeStackNavigator();
  function StoreStackScreen() {
    return (
      <StoreStack.Navigator>
        <StoreStack.Screen name="Store" component={StoreScreen} />
        <StoreStack.Screen name="Detail" component={DetailStore} />
      </StoreStack.Navigator>
    );
  }


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
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
          //headerShown:false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Store" component={StoreScreen} initialParams={StoreStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

