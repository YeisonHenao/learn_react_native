import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import GetAllProducts from "../../repository/Store/RepositoryStore";
import CardProducts from "./CardProducts";
import LoadingView from "../Common/LoadingView";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    try{
      getInfo()
    } catch(error){
      console.log(error);
    }
  },[])


  const getInfo = async () => {
    const response = await GetAllProducts();
    setProducts(response)
    setLoading(false)
  }


  const renderItem = ({ item }) => <CardProducts product={item} />;

  return (
    <>
      {loading ? (
        <LoadingView />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
        />
      )}
    </>
  );
};

export default ListProducts;
