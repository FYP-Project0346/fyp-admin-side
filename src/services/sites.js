import axios from "axios";
import { GET_ALL_SITES_API } from "./Api";


const getAllSites = async ()=>{
    const response = await axios.get(GET_ALL_SITES_API);
    return response.data.sites;
}


export {
    getAllSites,
}