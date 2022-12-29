import { Text, Image, SafeAreaView , ScrollView , Button , TouchableHighlight , View } from "react-native";
import {Divider} from 'react-native-paper'
import style from "../../assets/Styles/StoreStyles/DetailStoreStyle";
import Feather from "react-native-vector-icons/Feather";



const ViewDetail = ({ product }) => {
  const data = product;

  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        <Text style={style.headerTitle}>
          {JSON.stringify(data.title).slice(1, -1)}
        </Text>
        <Image source={{ uri: data.image }} style={style.image} />
        <Divider />
        <Text style={style.descriptionText}>
          {JSON.stringify(data.description).slice(1, -1)}
        </Text>
        <Text style={style.priceText}>${JSON.stringify(data.price)}</Text>
        <View style={style.ViewButtons}>
          <TouchableHighlight>
            <View style={style.buttonAdd}>
              <Feather size={20} name={"shopping-cart"} color={"#000"} />
              {/* </Feather> */}
              <Text>Add to cart</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={style.buttonBuyNow}>
              <Feather name={"credit-card"} size={20} color={"#000"} />
              <Text>Buy now</Text>
            </View>
          </TouchableHighlight>

          {/* <Button 
            title="Buy now"
            style={style.buttonBuyNow}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDetail;
