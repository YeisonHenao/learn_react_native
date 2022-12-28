import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StoreStackNavigation, RickAndMortyStackNavigation} from "./StackStore";
import HomeDrawerNavigator from '../Navigation/DrawerNavigation'
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            if (route.name === "Main") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Store") {
              iconName = focused ? "shopping-bag" : "shopping-bag";
            } else if (route.name === "Rick And Morty") {
              iconName = focused ? "film" : "film";
            }
            return <Feather name={iconName} size={size=20} color={color} />;
          },
          tabBarActiveTintColor: "#256CD3",
          tabBarInactiveTintColor: "#000",
          headerShown: false,
          tabBarStyle: {
            backgroundColor:"#FFFBE9",
            borderColor:"#FFFBF9",
            paddingBottom: 6,
            height: 50,
            borderTopRightRadius:8,
            borderTopLeftRadius:8
          },
        })}
      >
        <Tab.Screen
          name="Main" 
          component={HomeDrawerNavigator} />
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
