import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const DetailStore = ({ route }) => {
  const data = route.params.product;

  //const screenWidth = Dimensions.get('Window').width;

  const style = StyleSheet.create({
    image: {
      height: "50%",
      width: "80%",
      borderRadius: 10,
      alignSelf: "center",
      marginTop: 5,
      marginBottom: 5,
    },
    headerTitle: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
    descriptionText: {
      fontSize: 16,
      margin: 8,
    },
    priceText: {
      textAlign: "center",
      fontSize: 16,
      color: "red",
    },
    scroll: {
      backgroundColor: "#fff",
      flex:1
    },
  });

  return (
    <>
      <ScrollView style={style.scroll} contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={style.headerTitle}>
            {JSON.stringify(data.title).slice(1, -1)}
          </Text>
          <Image source={{ uri: data.image }} style={style.image} />
          <Text style={style.descriptionText}>
            {JSON.stringify(data.description).slice(1, -1)}
          </Text>
          <Text style={style.priceText}>{JSON.stringify(data.price)}</Text>
      </ScrollView>
    </>
  );
};

export default DetailStore;
