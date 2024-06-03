import axios from "axios";
import {
    GET_ALL_ADMINS,
    GET_ALL_THE_USERS,
    ADD_ADMIN,
    DELETE_USERS_API,
} from "./Api"

const getUsers = async () => {
    const response = await axios.get(GET_ALL_THE_USERS);
    return response.data.users;
}

const addAdmin = async (data) => {
    const response = await axios.post(ADD_ADMIN, {
        ...data,
    })
    return response.status === 200;
}

const getAllAdmins = async () => {
    const response = await axios.get(GET_ALL_ADMINS)
    return response.data.admins;
}

const deleteUser = async (id) => {
    const response = await axios.delete(DELETE_USERS_API, {
        params:{
            id
        }
    })
}





export {
    getUsers,
    addAdmin,
    getAllAdmins,
    deleteUser,
}