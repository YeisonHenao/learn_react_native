import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import style from "../assets/Styles/CardProductStyle";

const CardProducts = ({ product }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style.cardImage}
      onPress={() => {
        navigation.navigate("Detail", { product: product });
      }}
    >
      <Text style={style.textTitle}>{product.title}</Text>
      <Image source={{ uri: product.image }} style={style.image} />
      <Text style={style.textPrice}>${product.price}</Text>
    </TouchableOpacity>
  );
};

export default CardProducts;
