import axios from '../../config/Store';

export default async () => {
    return axios
        .get(`/users/1`)
        .then((response) => {
           if(response){
               return response;
           }else{
               return {data : { message : "Ha ocurrido un error"}}
           }
        })
    .catch((error) => {
        console.log(error);
    })
}