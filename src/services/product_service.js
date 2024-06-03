import { 
  GET_PRODUCT_BY_ID, 
  GET_ALL_PRODUCTS_API,
  DELETE_PRODUCT_API,
 } from "./Api"
import axios from "axios"

const getProductById = async (id)=> {
    try {
      const response = await axios.get(GET_PRODUCT_BY_ID, {
        params: {
          id: id,
        },
      })
      return response.data.data
    } catch (e) {
      return []
    }
  }


  const  getAllProducts = async (search, limit, skip, max, min, sites) =>{
    if (search === undefined) {
      search = ''
    }
    const params = {
      limit,
      skip,
      max,
      min,
      sites: JSON.stringify(sites),
      search,
    }
    try {
      let response = await axios.get(GET_ALL_PRODUCTS_API, {
        params,
      })
      return response.data.data
    } catch (e) {
      alert('Could not get the data')
    }
  }  

  const deleteProduct = async (id)=>{
    let response = await axios.delete(DELETE_PRODUCT_API, {
      params:{
        id
      }
    });
    return response.status === 200;
  }


export {
    getAllProducts,
    getProductById,
    deleteProduct,
}