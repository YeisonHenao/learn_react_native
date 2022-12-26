import service from '../../service/store'

const GetAllProducts = async () => {
  let response = await service.Allproduct();
  if(response){
    return response.data
  }else{
    return new Error("Algo salio mal")
  }
}

export default GetAllProducts;