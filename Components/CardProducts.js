import React from "react";
import { TouchableOpacity , Image, StyleSheet , Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StoreStackScreen from "../App.js";


const CardProducts = ({ product }) => {

  const navigation = useNavigation();

  const style = StyleSheet.create({
    cardImage:{
      display:"flex",
      width:'48%',
      margin:5,
      justifyContent:'space-between',
      borderWidth:2,
      borderRadius:10,
      borderColor:"#000",
    },
    image:{
      height:100,
      width:100,
      borderRadius:10,
      alignSelf:'center',
      marginTop:5,
      marginBottom:5
    },
    textData:{
      textAlign:'center'
    }
  })

  return (
    <TouchableOpacity
      style={style.cardImage}
      onPress={() =>
        alert(
          navigation.navigate(StoreStackScreen, {
            name: "Store",
            screen: "Detail",
          })
        )
      }
    >
      <Text style={style.textData}>{product.title}</Text>
      <Image source={{ uri: product.image }} style={style.image} />
      <Text style={style.textData}>{product.price}</Text>
    </TouchableOpacity>
  );
}

export default CardProducts;