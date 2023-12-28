import { useEffect , useState } from "react"
import { FlatList } from "react-native"
import LoadingView from "../Common/LoadingView"
import CardCharacter from "./CardCharacter"
import GetAllCharacters from "../../repository/Rick And Morty/RepositoryRickAndMorty"

const ListCharacters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(async() => {
    try{
      getInfo()
    }catch(error){
      console.log(error)
    }
  }, [])

  const getInfo = async () => {
    const response = await GetAllCharacters();
    console.log(response);
    setCharacters(response)
    setLoading(false)
  }
  
  const renderItem = ({item}) => <CardCharacter character={item} />;

  return(
    <>
      {
        loading ? (
          <LoadingView />
        ): (
          <FlatList 
            data={characters}
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