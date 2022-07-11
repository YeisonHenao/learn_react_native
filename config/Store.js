import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "https://fakestoreapi.com";

export default instance;