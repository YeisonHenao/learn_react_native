import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import GetAllProducts from "../../repository/Store/RepositoryStore";

//Components
import CardProducts from "./CardProducts";
import LoadingView from "../Common/LoadingView";

const ListProducts = () => {
  const [value, setValue] = useState("");
  const [loading, Isloading] = useState(true);

  useEffect(async () => {

    try{
      if(value != ""){
        return
      }else{
        let response = await GetAllProducts();
        Isloading(false);
        setValue(response || "No data");
      }
    }catch(error){
      console.log(error)
    }
  }, []);


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
