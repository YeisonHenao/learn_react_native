import React from "react";
import { View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";

function BadgeShoppingCart() {
  const navigation = useNavigation();
  
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
        navigation.navigate("Cart")
        }}
      >
        <Feather
          name="shopping-cart"
          size={20}
          style={{ marginRight: 25 , marginTop:15, marginBottom:20, height: 20 }}
          color={"#000"}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BadgeShoppingCart;
