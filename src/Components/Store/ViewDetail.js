import { Text, Image, SafeAreaView, ScrollView, View, } from "react-native";
import { Divider } from "react-native-paper";
import ButtonCommon from "../Common/ButtonCommon";
import style from "../../../assets/Styles/StoreStyles/DetailStoreStyle";

/*
TODO:
1. Refactorizar componente de botones para una mejor vista.
*/


const ViewDetail = ({ product }) => {
  const data = product;

  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        <View>
          <Text style={style.headerTitle}>
            {JSON.stringify(data.title).slice(1, -1)}
          </Text>
          <Image source={{ uri: data.image }} style={style.image} />
          <Divider />
          <Text style={style.descriptionText}>
            {JSON.stringify(data.description).slice(1, -1)}
          </Text>
          <Text style={style.priceText}>${JSON.stringify(data.price)}</Text>
          <Divider />
        </View>
        <View style={{
          display:"flex",
          flexDirection:"row",
        }}>
          <ButtonCommon size={30} color={"#000"} name="shopping-cart" msg="Add to cart" back={"red"} />
          <ButtonCommon size={20} color={"#000"} name="credit-card" msg="Pay item" back={"green"}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDetail;
