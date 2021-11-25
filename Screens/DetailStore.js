import React, { useEffect, useState } from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';

const DetailStore = ({route}) => {

  const data = route.params;

  const style = StyleSheet.create({
    productImage:{
      height:50,
      width:50,
      marginLeft:60
    }
  })
  
  return(
    <View>
      <Text>Detail Screen</Text>
      <Text>titulo - {JSON.stringify(data.title)}</Text>
    </View>
  );
}

export default DetailStore;