import React from "react";
import { View } from "react-native";
import Feather from "react-native-vector-icons/Feather";


function BadgeShoppingCart() {
  return (
    <View>
      <Feather name="shopping-cart" size={8} color={"#fff"} />
    </View>
  );
}

export default BadgeShoppingCart;
