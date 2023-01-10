import { useEffect , useState } from "react"
import { FlatList } from "react-native"
import LoadingView from "../Common/LoadingView"
import CardCharacter from "./CardCharacter"
import GetAllCharacters from "../../repository/Rick And Morty/RepositoryRickAndMorty"

const ListCharacters = () => {

  const [Loading, IsLoading] = useState(true)
  const [value,SetValue] = useState("")

  useEffect(async() => {
    try{
      if(value != ""){
        return
      } else{
        let response = await GetAllCharacters();
        SetValue(response.results || "no data");
        IsLoading(false);
      }
    }catch(error){
      console.log(error)
    }
  }, [value])
  
  const renderItem = ({item}) => <CardCharacter character={item} />;

  return(
    <>
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

export default ListCharacters