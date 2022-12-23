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
});

export default style;
