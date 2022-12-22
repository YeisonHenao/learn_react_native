import axios from "axios"

const instance = axios.create();

instance.defaults.baseURL = "https://rickandmortyapi.com/api";

export default instance;