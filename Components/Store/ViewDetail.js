import { Text, Image, SafeAreaView , ScrollView , Button } from "react-native";
import {Divider} from 'react-native-paper'
import style from "../../assets/Styles/StoreStyles/DetailStoreStyle";

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
        <Button 
          title="Add to cart"
          style={style.buttonAdd}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDetail;
