import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


const style = StyleSheet.create({
  container:{
    height: height,
    width: width
  },  
  image: {
    height: height - 500,
    width: width - 100,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    resizeMode: "contain",
  },
  headerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },
  descriptionText: {
    fontSize: 16,
    margin: 15,
  },
  priceText: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
  ViewButtons:{
    display:"flex",
    flexDirection:"row",
    alignContent:"space-between"
  },
  buttonAdd:{
    display:"flex",
    flexDirection:"row",
    margin:15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    width:150,
    height:40,
    backgroundColor:"#3656A4"
  },
  buttonBuyNow:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    alignSelf:"center",
    margin:15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    width:150,
    height:40,
    backgroundColor:"#438B31"
  }
});

export default style;
