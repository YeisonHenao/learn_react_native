import React , {useState, useEffect} from "react";
import { View, TouchableOpacity , Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";

function BadgeShoppingCart() {

  const [value, setValue] = useState(0)
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
          style={{ marginRight: 25 , marginTop:10 }}
          color={"#000"}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BadgeShoppingCart;