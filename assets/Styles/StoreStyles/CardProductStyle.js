import { StyleSheet , Dimensions } from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const style = StyleSheet.create({
  cardImage: {
    width: widthDevice - 40,
    height: heightDevice - 380,
    margin: 20,
    padding:10,
    borderRadius:10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white'
  },
  image: {
    height: heightDevice - 550,
    width: widthDevice - 100,
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    resizeMode: "contain",
    marginBottom: 20,
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
    margin:8
  }
});

export default style;
