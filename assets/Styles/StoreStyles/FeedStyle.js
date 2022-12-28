import { StyleSheet , Dimensions } from "react-native";

const heightWindow = Dimensions.get("window").height;
const widthWindow = Dimensions.get("window").width;

const style = StyleSheet.create({
  headerComponent:{
    backgroundColor:"#CCD6A6",
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    height:100,
    width:widthWindow,
    position:"absolute"
  },
  title:{
    display:'flex',
    textAlign:"center",
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize:40,
    zIndex:1,
    elevation:1,
    marginTop:30
  },
  container:{
    backgroundColor:"#F4EAD5"
  }
})

export default style;