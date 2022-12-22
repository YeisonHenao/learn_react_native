import axios from "../../config/RickAndMorty";

export default async () => {
  return axios
    .get(`/character`)
    .then((response) => {
      if(response){
        return response
      }else{
        return {data: {message: "Ha ocurrido un error"}};
      }
    })
    .catch((error) => {
      console.log(error)
    })
}