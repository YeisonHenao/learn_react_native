import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

const CardCharacter = ({character}) => {
  const navigation = useNavigation();

  return(
    <TouchableOpacity>
      <Text>{character.name}</Text>
    </TouchableOpacity>
  )
}

export default CardCharacter;