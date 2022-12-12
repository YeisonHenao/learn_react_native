import { StyleSheet , Dimensions } from "react-native";

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#232223",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff"
  },
  Image:{
    width: widthWindow - 100,
    height: heightWindow - 200,
  }
});

export default style;
