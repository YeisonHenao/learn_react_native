import service from '../../service/RickAndMorty'

  const GetCharacters = async () => {
    let response = await service.AllCharacters();
    if (response) {
      return response.data
    } else{
      return new Error("Algo salio mal")
    }
  }

export default GetCharacters;