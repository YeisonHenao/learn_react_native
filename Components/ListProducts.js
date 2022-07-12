import React, { useEffect, useState } from "react";
import { View, Text , ActivityIndicator ,  FlatList } from "react-native";
import Allproduct from "../service/store/Allproduct";
import style from '../assets/Styles/LoadingStyle';

//Components
import CardProducts from "./CardProducts";

const ListProducts = () => {
  const [value, setValue] = useState("");
  const [loading, Isloading] = useState(true);

  useEffect(async () => {
    const response = await getData();
    Isloading(false);
    setValue(response || "No data");
  }, []);

  const getData = async () => {
    let response = await Allproduct();
    return response.data;
  };

  const renderItem = ({ item }) => <CardProducts product={item} />;

  return (
    <>
      {loading ? (
        <View style={style.container}>
          <Text style={style.text}>Cargando...</Text>
          <ActivityIndicator size="large" color="#256CD3" />
        </View>
      ) : (
        <FlatList
          data={value}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      )}
    </>
  );
};

export default ListProducts;
