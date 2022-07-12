import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  image: {
    height: "50%",
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
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
  scroll: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default style;
