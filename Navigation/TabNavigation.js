import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  StoreStackNavigation,
  RickAndMortyStackNavigation,
} from "./StackStore";
import Feather from "react-native-vector-icons/Feather";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Main") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Store") {
              iconName = focused ? "shopping-bag" : "shopping-bag";
            } else if (route.name === "Rick And Morty") {
              iconName = focused ? "film" : "film";
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#256CD3",
          tabBarInactiveTintColor: "#fff",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#232223",
              borderColor:"#232223",
            paddingBottom: 6,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Main" component={MainStackNavigator} />
        <Tab.Screen name="Store" component={StoreStackNavigation} />
        <Tab.Screen
          name="Rick And Morty"
          component={RickAndMortyStackNavigation}
        />
      </Tab.Navigator>
    </SafeAreaProvider>   
  );
};

export default BottomTabNavigator;
