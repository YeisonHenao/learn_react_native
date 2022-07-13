import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

//componentes
import HomeView from "../Screens/Home";
import StoreView from "../Screens/Store";
import DetailStoreView from "../Screens/DetailStore";
import ShoppingCartView from "../Screens/ShoppingCart";
import ConfigurationView from "../Screens/ConfigurationView";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

const StoreStackNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1E1E1E",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          },
        }}
      >
        <Stack.Screen name="Store" component={StoreView} />
        <Stack.Screen name="Detail" component={DetailStoreView} />
        <Stack.Screen name="Shopping Cart" component={ShoppingCartView} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

const ConfigurtionStackNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Configuration" component={ConfigurationView} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export {
  MainStackNavigator,
  StoreStackNavigation,
  ConfigurtionStackNavigation,
};
