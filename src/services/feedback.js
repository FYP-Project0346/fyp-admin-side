import { GET_FEEDBACKS_API, DELETE_FEEDBACK_API } from "./Api";
import axios from "axios";


const getFeedbacks = async ()=>{
    const response = await axios.get(GET_FEEDBACKS_API)
    return response.data.data;
}

const deleteFeedback = async (id)=>{
    const response = await axios.delete(DELETE_FEEDBACK_API, {
        params:{
            id
        }
    })
    return response.status === 200;
}


export {
    getFeedbacks,
    deleteFeedback,
}