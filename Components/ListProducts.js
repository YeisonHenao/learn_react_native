import React from "react";
import { View, FlatList, Image , StyleSheet } from "react-native";
import Allproduct from '../service/store/Allproduct'

const ListProducts = () => {
  const [value, setValue] = React.useState("");

  React.useEffect(async () => {
    const response = await getData();
    setValue(response || "No data");
  }, []);

  const getData = async () => {
    let response = await Allproduct();
    console.log(response.data);
    return response.data;
  };

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const Item = ({title, image , price}) => (
   <View>
    <Text>{title}</Text>
    <Image source={{uri:image}} style={{height:50,width:50}} />
    <Text>{price}</Text>
   </View>
  );

   const renderItem = ({value}) => {
    <Item title={this.value.title} image={this.value.image} price={this.value.price} />
   }
 

  return(
   <View>
     <FlatList 
      data={value}
      renderItem={renderItem}
      keyExtractor={(value) => value.id}
     />
   </View>
  );
};

export default ListProducts;
