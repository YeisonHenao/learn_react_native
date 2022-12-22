import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Allproduct from "../../service/store/Allproduct";

//Components
import CardProducts from "./CardProducts";
import LoadingView from "../Common/LoadingView";

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
        <LoadingView />
      ) : (
        <FlatList
          data={value}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
        />
      )}
    </>
  );
};

export default ListProducts;