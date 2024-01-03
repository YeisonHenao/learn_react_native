import { useEffect , useState, useRef } from "react"
import { FlatList } from "react-native"
import LoadingView from "../../../Components/LoadingView"
import CardCharacter from "./CardCharacter"
import repository from '../../../repository/Rick And Morty/RepositoryRickAndMorty'

const ListCharacters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(async() => {
    try{
      if(!loading){
        getInfo()
      }
    }catch(error){
      console.log(error)
    }
  }, [])

  const getInfo = async () => {
    const response = await repository()
    setCharacters(response)
    setLoading(true)
  }
  
  const renderItem = ({item}) => <CardCharacter character={item} />;

  return(
    <>
      {
        !loading ? (
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