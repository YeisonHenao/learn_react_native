import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListProducts from "../Components/ListProducts";

const Store = ({navigator}) => {

  const StoreStack = createNativeStackNavigator();
  function StoreStackScreen() {
    return (
      <StoreStack.Navigator>
        <StoreStack.Screen name="Detail" component={DetailStore} />
      </StoreStack.Navigator>
    );
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={style.container}>
      <ListProducts />
      <Button onPress={() => navigator.navigate("Detail")} title="Detalles" />
    </View>
  );
};

export default Store;
