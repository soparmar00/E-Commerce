import axios from "axios"
import { proFilter, selecteProduct, showProduct } from "../redux/Action/action"


const proRequest=axios.create({
    baseURL:"https://fakestoreapi.com",
})

export const fetchProducts = () => async(dispatch) => {
    try {
        const response = await proRequest.get(`/products`)
        dispatch(showProduct(response.data));
        } 
    catch (err) {
        console.log(err);
    }
    
}   

export const fetchProDetail = (id) =>  async (dispatch) => {
    try {
        const response = await proRequest.get(`/products/${id}`)
        dispatch(selecteProduct(response.data))
        } 
    catch (err) {
        console.log(err);
    }
}

export const filterProduct = (state) => async (dispatch) => {
    console.log(state)
    try{
        const {limit, sort} = state
        const response = await proRequest.get(`/products?limit=${limit}&sort=${sort}`)
        dispatch(proFilter({fetchProduct: response.data}))
       
    }
    catch (err) {
        console.log(err)
    }
}


