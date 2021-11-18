import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

import ListProducts from "../Components/ListProducts";

const Store = () => {

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
    </View>
  );
};

export default Store;
