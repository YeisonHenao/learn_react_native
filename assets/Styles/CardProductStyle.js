import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  cardImage: {
    display: "flex",
    width: "48%",
    margin: 5,
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#000",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  textData: {
    textAlign: "center",
  },
});

export default style;
