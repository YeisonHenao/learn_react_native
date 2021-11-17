import * as React from "react";
import { Text, View , StyleSheet, Button , Image  } from "react-native";
import Oneproduct from "../service/store/Oneproduct";
//import { useNavigation } from "@react-navigation/native";

const Store = () => {
  const [value , setValue] = React.useState('')

    React.useEffect(async () => {
        const response = await getData();
        setValue(response || 'No data');
    }, []);
  
  const getData = async () => {
    let response = await Oneproduct();
    console.log(response.data);
    return response.data
  }

  
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return(
    <View style={style.container}>
      <Text>{JSON.stringify(value.title)}</Text>
      <Image 
        source={{uri:value.image}}
        style={{height:200,width:200,borderRadius:5}}
      />
      <Text>{JSON.stringify(value.description)}</Text>
      <Text>{JSON.stringify(value.price)}</Text>
      
    </View>
  );
}

export default Store;