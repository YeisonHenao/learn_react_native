import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  cardImage: {
    display: "flex",
    width: "47%",
    margin: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000",
  },
  image: {
    height: 100,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    resizeMode: "contain",
  },
  textData: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  textPrice:{
    textAlign:"center",
    color:"red",
  }
});

export default style;
