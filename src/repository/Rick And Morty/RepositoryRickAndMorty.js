import service from '../../service/RickAndMorty/index'

  const GetAllCharacters = async () => {
    let response = await service.GetAllCharacters()
    if (response) {
      return response.data
    } else{
      return new Error("Algo salio mal")
    }
  }

export default GetAllCharacters;