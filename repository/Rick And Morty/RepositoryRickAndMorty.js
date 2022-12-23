import service from '../../service/RickAndMorty'

  const GetAllCharacters = async () => {
    let response = await service.AllCharacters();
    if (response) {
      return response.data
    } else{
      return new Error("Algo salio mal")
    }
  }

export default GetAllCharacters;