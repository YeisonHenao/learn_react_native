import { TouchableOpacity, Image, Text , SafeAreaView } from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import style from '../../../assets/Styles/RickAndMortyStyles/CardCharacter'

const CardCharacter = ({ character }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity style={style.container} onPress={() => {
        navigation.navigate("view_detail",{character: character})
      }
      }>
        <Image 
          source={{uri: character.image}} style={style.image}
        />
        <Text style={style.nameCharacter}>{character.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CardCharacter;
