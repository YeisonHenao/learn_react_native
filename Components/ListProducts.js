import React, { useEffect, useState } from "react";
import { View,Text, FlatList } from "react-native";
import Allproduct from "../service/store/Allproduct";
import style from '../assets/Styles/ListProductsStyle'

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
          <Text style={style.loadView}>Cargando</Text>
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
