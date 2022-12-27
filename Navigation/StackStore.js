import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BadgeShoppingCart from "../Components/Store/BadgeShoppingCart";

//componentes
import HomeView from "../Screens/Home";
import StoreView from "../Screens/Store";
import DetailStoreView from "../Screens/DetailStore";
import ShoppingCartView from "../Screens/ShoppingCart";
import RickAndMortyView from "../Screens/RickAndMortyView";

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
        screenOptions={({ route }) => ({
          NameTitle: () => {},
          headerShown: true,
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#1E1E1E",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          },
        })}
      >
        <Stack.Screen
          name="StoreList"
          options={{ title: "Store", headerRight: () => <BadgeShoppingCart /> }}
          component={StoreView}
        />
        <Stack.Screen 
          name="Detail" 
          options={{ title: "Store", headerRight: () => <BadgeShoppingCart /> }} 
          component={DetailStoreView} 
          />
        <Stack.Screen name="Cart" component={ShoppingCartView} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

const RickAndMortyStackNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Rick And Morty" component={RickAndMortyView} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export {
  MainStackNavigator,
  StoreStackNavigation,
  RickAndMortyStackNavigation,
};
