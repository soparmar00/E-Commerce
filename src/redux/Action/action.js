export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const SELECTE_PRODUCT = "SELECTE_PRODUCT";
export const PRO_FILTER = "PRO_FILTER";
export const GET_CART_ITEM = "GET_CART_ITEM";
export const ADD_TO_CART = "ADD_TO_CART";
export const REDIRECT = "REDIRECT";


export const signUp = (payload) => ({
    type: SIGN_UP,
    payload,
})

export const login = (payload) => {
    return{
        type: LOGIN,
        payload,
    }
}

export const logout = (payload) => ({
    type: LOGOUT,
    payload,
})

export const showProduct = (payload) => ({
    type: SHOW_PRODUCT,
    payload 
});

export const selecteProduct = (payload) => ({
    type: SELECTE_PRODUCT,
    payload
});

export const proFilter = (payload) => ({
    type: PRO_FILTER,
    payload
})

export const getCartItem = (payload) => ({
    type: GET_CART_ITEM,
    payload
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const redirect = (payload) => ({
    type: REDIRECT,
    payload
})