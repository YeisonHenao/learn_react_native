import React from "react";
import {
  Text,
  Image,
  ScrollView,
} from "react-native";
import style from '../assets/Styles/DetailStoreStyle'

const DetailStore = ({ route }) => {
  const data = route.params.product;

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
          <Text style={style.priceText}>${JSON.stringify(data.price)}</Text>
      </ScrollView>
    </>
  );
};

export default DetailStore;
