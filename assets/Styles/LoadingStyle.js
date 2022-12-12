import { StyleSheet , Dimensions } from "react-native";
import { color } from "react-native-reanimated";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        marginTop: 280,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30
    },
    text: {
        color: "#256CD3",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default style;