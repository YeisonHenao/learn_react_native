import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import GetAllProducts from "../../repository/Store/RepositoryStore";
import CardProducts from "./CardProducts";
import LoadingView from "../Common/LoadingView";

const ListProducts = () => {
  const [value, setValue] = useState("");
  const [wait, iswaiting] = useState(true);

  useEffect(async () => {
    try{
      if(value != ""){
        return
      }else{
        let response = await GetAllProducts();
        iswaiting(false);
        setValue(response);
      }
    }catch(error){
      console.log(error)
    }
  }, []);


  const renderItem = ({ item }) => <CardProducts product={item} />;

  return (
    <>
      {wait ? (
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
