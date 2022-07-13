import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  StoreStackNavigation,
  ConfigurtionStackNavigation,
} from "./StackStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
            } else if (route.name === "Configuration") {
              iconName = focused ? "settings" : "settings";
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#256CD3",
          tabBarInactiveTintColor: "#fff",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#1E1E1E",
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            paddingBottom: 6,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Main" component={MainStackNavigator} />
        <Tab.Screen name="Store" component={StoreStackNavigation} />
        <Tab.Screen
          name="Configuration"
          component={ConfigurtionStackNavigation}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default BottomTabNavigator;
