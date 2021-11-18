import React from "react";
import { View , Image, StyleSheet , Text } from "react-native";

const CardProducts = ({ product }) => {

  const style = StyleSheet.create({
    cardImage:{
      display:"flex",
      width:'48%',
      margin:4,
      justifyContent:'space-between',
      borderWidth:2,
      borderRadius:10,
      borderColor:"#000"
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
    <View style={style.cardImage}>
      <Text style={style.textData}>{product.title}</Text>
      <Image source={{ uri: product.image }} style={style.image} />
      <Text style={style.textData}>{product.price}</Text>
    </View>
  );
}

export default CardProducts;