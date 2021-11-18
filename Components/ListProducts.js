import React from "react";
import { View, FlatList } from "react-native";
import Allproduct from "../service/store/Allproduct";

//Components
import CardProducts from "./CardProducts";

const ListProducts = () => {
  const [value, setValue] = React.useState("");

  React.useEffect(async () => {
    const response = await getData();
    setValue(response || "No data");
  }, []);

  const getData = async () => {
    let response = await Allproduct();
    return response.data;
  };

  const renderItem = ({ item }) => <CardProducts product={item} />;

  return (
    <View>
      <FlatList
        data={value}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ListProducts;
