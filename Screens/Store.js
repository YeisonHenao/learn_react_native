import * as React from "react";
import { Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListProducts from "../Components/ListProducts";

const Store = ({navigation}) => {

  return (
    <View>
      <Button
        onPress={() => {
          alert(navigation.navigate("Detail", { screen: "Detail" }));
      }}
        title="Detalles"
      />
      <ListProducts />
    </View>
  );
};

export default Store;
