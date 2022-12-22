//Importaciones
import { useEffect , useState } from "react"
import AllCharacters from '../../service/RickAndMorty/AllCharacters'
import { Text , FlatList } from "react-native"
import LoadingView from "../Common/LoadingView"
import CardCharacter from "./CardCharacter"

export default ListCharacters = () => {

  const [Loading, IsLoading] = useState(true)
  const [value,SetValue] = useState("")

  //Consumo del Api de personajes
  useEffect(async () => {
    let response = await AllCharacters();
    SetValue(response.data || "No data"); 
    console.log(value)
    IsLoading(false)
  }, []);


  const renderItem = ({item}) => <CardCharacter character={item} />;


  //Vista
  return(
    <>
      <Text>Rick and Morty</Text>
      {
        Loading ? (
          <LoadingView />
        ): (
          <FlatList 
            data={value}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        )
      }
    </>
  )
}