export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const SELECTE_PRODUCT = "SELECTE_PRODUCT";
export const PRO_FILTER = "PRO_FILTER";
export const GET_CETEGORY = "GET_CETEGORY"


export const signUp = (payload) => ({
    type: SIGN_UP,
    payload,
})

export const login = (payload) => ({
    type: LOGIN,
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



