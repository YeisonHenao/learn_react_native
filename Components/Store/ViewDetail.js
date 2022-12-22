import React from "react";
import { Text, Image, SafeAreaView , ScrollView } from "react-native";
import {Divider} from 'react-native-paper'
import style from "../../assets/Styles/DetailStoreStyle";

const ViewDetail = ({ product }) => {
  const data = product;

  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        <Text style={style.headerTitle}>
          {JSON.stringify(data.title).slice(1, -1)}
        </Text>
        <Image source={{ uri: data.image }} style={style.image} />
        <Divider />
        <Text style={style.descriptionText}>
          {JSON.stringify(data.description).slice(1, -1)}
        </Text>
        <Text style={style.priceText}>${JSON.stringify(data.price)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDetail;
