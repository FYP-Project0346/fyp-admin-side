const BASE_URL = "http://localhost:5000";
const GET_ALL_THE_USERS = `${BASE_URL}/user/get-all-users`;
const ADD_ADMIN = `${BASE_URL}/admin/register`
const GET_ALL_ADMINS = `${BASE_URL}/admin/get-all-admins`
const DELETE_USERS_API = `${BASE_URL}/user/delete-user`
const LOGIN_USER_API = `${BASE_URL}/admin/login`


// Sites
const GET_ALL_SITES_API = `${BASE_URL}/admin/get-all-sites`

// Feedback
const GET_FEEDBACKS_API = `${BASE_URL}/contact/get`
const DELETE_FEEDBACK_API = `${BASE_URL}/contact/delete`


// Products
const GET_ALL_PRODUCTS_API = `${BASE_URL}/products/get`
const GET_PRODUCT_BY_ID = `${BASE_URL}/products/getById`
const DELETE_PRODUCT_API = `${BASE_URL}/products/delete-product`

export {
    GET_ALL_ADMINS,
    GET_ALL_THE_USERS,
    ADD_ADMIN,
    GET_ALL_SITES_API,
    GET_FEEDBACKS_API,
    DELETE_FEEDBACK_API,
    GET_ALL_PRODUCTS_API,
    GET_PRODUCT_BY_ID,
    DELETE_PRODUCT_API,
    DELETE_USERS_API,
    LOGIN_USER_API,
}