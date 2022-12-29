import { View , Text , Image } from "react-native";

const BadgeUser = () => {
  return(
    <View style={{display:"flex", flex:1, flexDirection:"row" , marginRight: 40 , alignSelf:"flex-end" , marginTop: 18}}>
      <Text style={{color:"#000"}}>John</Text>
      <Image source={{uri:'https://placebeard.it/250/250'}} style={{height:32, width:32 , borderRadius:15}} />
    </View>
  );
}

export default BadgeUser;