import axios from "../../config/Store";

export default async ( product ) => {
  return axios
    .get()
    .then((response) => {
      console.log(product)
      if (response) {
        return response;
      } else {
        return { data: { message: "Ha ocurrido un error " } };
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

