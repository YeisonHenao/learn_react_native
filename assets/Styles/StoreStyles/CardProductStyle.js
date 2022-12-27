import { StyleSheet , Dimensions } from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const style = StyleSheet.create({
  cardImage: {
    width: widthDevice - 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000",
    height: heightDevice - 380
  },
  image: {
    height: heightDevice - 500,
    width: widthDevice - 100,
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 20
  },
  textTitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20
  },
  textPrice:{
    textAlign:"center",
    color:"red",
  }
});

export default style;
