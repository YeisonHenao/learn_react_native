import { Dimensions , StyleSheet } from "react-native";


const widthDevice = Dimensions.get("window").width;
const heightDevice = Dimensions.get("window").height;

const style = StyleSheet.create({
  container:{
    backgroundColor:"red",
     width: widthDevice - 200,
     marginTop:3,
     margin: 5,
     borderRadius: 6,
     borderColor: "#eee",
     height: heightDevice - 420
  },
  image:{
    height: heightDevice - 500,
    width: widthDevice - 200,
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 20,
  },
  nameCharacter:{
    textAlign:"center",
  }
})

export default style;