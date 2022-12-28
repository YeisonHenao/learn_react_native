import { Text , View  } from "react-native";
import style from "../../assets/Styles/StoreStyles/FeedStyle";
import BadgeUser from "./BadgeUser";

const Feed = ({ navigation }) => {
  return (
    <View style={style.container}>
        <View style={style.headerComponent} >
        </View>
        <View style={style.title}>
          <BadgeUser/>
        </View>
      {/* <Text style={style.title}>Home Screen</Text> */}

    </View>
  );
}

export default Feed;