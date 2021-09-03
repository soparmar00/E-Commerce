import axios from "axios"
import { addToCart, login, proFilter, selecteProduct, showProduct, signUp } from "../redux/Action/action"


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
    try{
        const {limit, sort, categ} = state
        const response = await proRequest.get(`/products/category/${categ}?limit=${limit}&sort=${sort}`)
        dispatch(proFilter({fetchProduct: response.data}))
    }
    catch (err) {
        console.log(err)
    }
}


export const signUpUser = (state) => async (dispatch) => {
    try {
        const response = await proRequest.post('/users', state)
        dispatch(signUp(response.data))
    }
    catch (err) {
        console.log(err);
    }
}

export const loginUser = (state) => async (dispatch) => {
    try {
        const response = await proRequest.post('/auth/login', state);
        localStorage.setItem("token", response.data.token)
        dispatch(login(response.data))
    }
    catch (err) {
        console.log(err)
    }
}


