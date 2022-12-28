import { StyleSheet , Dimensions } from "react-native";

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default style;
