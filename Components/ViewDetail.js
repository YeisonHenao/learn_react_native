import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import style from "../assets/Styles/DetailStoreStyle";

const ViewDetail = ({ product }) => {
  const data = product;

  return (
    <SafeAreaView>
      <View>
        <Text style={style.headerTitle}>
          {JSON.stringify(data.title).slice(1, -1)}
        </Text>
        <Image source={{ uri: data.image }} style={style.image} />
        <Text style={style.descriptionText}>
          {JSON.stringify(data.description).slice(1, -1)}
        </Text>
        <Text style={style.priceText}>${JSON.stringify(data.price)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ViewDetail;
