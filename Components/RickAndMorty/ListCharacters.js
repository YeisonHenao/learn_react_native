//Importaciones
import { useEffect , useState } from "react"
import { Text , FlatList } from "react-native"
import LoadingView from "../Common/LoadingView"
import CardCharacter from "./CardCharacter"
import GetAllCharacters from "../../repository/Rick And Morty/RepositoryRickAndMorty"

export default ListCharacters = () => {

  const [Loading, IsLoading] = useState(true)
  const [value,SetValue] = useState("")

  useEffect(async() => {
    try{
      if(value != ""){
        return
      } else{
        let response = await GetAllCharacters();
        SetValue(response.results);
        IsLoading(false);
      }
    }catch(error){
      console.log(error)
    }
  }, [])
  
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