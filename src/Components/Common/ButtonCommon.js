import {useState} from "react";
import {View, TouchableHighlight , Text } from 'react-native';
import Feather from "react-native-vector-icons/Feather";

const ButtonCommon = (props) => {

  /*
    props:
      size: for the size of the icon
      name: for the name of icon
      color: for the line of the icon
      msg: for the message of the button
      bg: for the background of the button
  */


  return(
    <TouchableHighlight style={{
      backgroundColor:props.back,
      margin:40,
      borderRadius:8,
      color:"#fff"
    }}>
      <View style={{
        display:"flex",
        flexDirection:"row",
      }}>
          <Feather style={{marginTop:3, marginLeft:3 , marginRight:3}} size={props.size} name={props.name} color={props.color} />
          <Text style={{padding:4}}>{props.msg}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ButtonCommon