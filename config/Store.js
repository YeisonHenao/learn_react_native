import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "https://fakestoreapi.com";
//const url = `https://fakestoreapi.com/products`;

export default instance;