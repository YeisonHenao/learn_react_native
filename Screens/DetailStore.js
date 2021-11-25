import React, { useEffect, useState } from 'react';
import {View , Text , StyleSheet , Image , ScrollView , SafeAreaView} from 'react-native';

const DetailStore = ({route}) => {

  const data = route.params.product;

  const style = StyleSheet.create({
    image:{
      height:'50%',
      width:'80%',
      borderRadius:10,
      alignSelf:'center',
      marginTop:5,
      marginBottom:5
    },
    headerTitle:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20
    },
    descriptionText:{
      fontSize:16,
      margin:8
    },
    priceText:{
      textAlign:'center',
      fontSize:16,
      color:'red'
    }
  })
  
  return(
    <View>
          <Text style={style.headerTitle}>{JSON.stringify(data.title).slice(1,-1)}</Text>
          <Image 
            source={{uri:data.image}}
            style={style.image}
          />
          <Text style={style.descriptionText}>{JSON.stringify(data.description).slice(1,-1)}</Text>
          <Text style={style.priceText}>{JSON.stringify(data.price)}</Text>
    </View>
  );
}

export default DetailStore;