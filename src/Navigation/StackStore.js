/**
 * Importación de modulos para la creación de la navegación de Stack
 */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BadgeShoppingCart from "../Components/Store/BadgeShoppingCart";

/**
 * Importación de vistas a ser usadas e identificadas en cada Stack
 */
import HomeView from "../Screens/Home/Home";
import StoreView from "../Screens/Store/Store";
import DetailStoreView from "../Screens/Store/Detail/DetailStore";
import ShoppingCartView from "../Screens/Store/ShoppingCart/ShoppingCart";
import RickAndMortyView from "../Screens/RickAndMorty/RickAndMortyView";
import ViewDetail from "../Components/RickAndMorty/ViewDetail";

const Stack = createStackNavigator();

/**
 * MainStackNavigator crea el Stack principal de la aplicación
 * @returns Regresa el Stack con la vista principal usada por la aplicación.
 */
const MainStackNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

/**
 * StoreStackNavigation crea el stack empleado en la vista de la tienda
 * @returns Regresa el Stack de la vista de la tienda donde estan alojadas el carrito de compra y entre otras vistas
 */
const StoreStackNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          NameTitle: () => {},
          headerShown: true,
          headerTintColor: "#000",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#CCD6A6",
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

/**
 * RickAndMortyStackNavigation crea el stack empleado en las vistas de Rick And Morty
 * @returns Regresa el Stack de la vista de Rick And Morty donde se aloja el listado de los personajes y el detalle de estos
 */
const RickAndMortyStackNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Rick And Morty" component={RickAndMortyView} />
          <Stack.Screen name="view_detail" component={ViewDetail} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export {
  MainStackNavigator,
  StoreStackNavigation,
  RickAndMortyStackNavigation,
};
