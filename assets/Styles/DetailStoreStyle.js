import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  image: {
    height: "50%",
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  headerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 16,
    margin: 8,
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
