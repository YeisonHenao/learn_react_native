import instance from '../../config/RickAndMorty'

export default async () => {
  return instance.get(`/character`)
    .then(response => {
      if(response){
        return response
      }else{
        { data: { message: "Ha ocurrido un error " } };
      }
    })
    .catch(error => {
      console.log(error);
    })
}