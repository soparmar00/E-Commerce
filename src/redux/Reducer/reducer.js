import {SHOW_PRODUCT,SELECTE_PRODUCT, PRO_FILTER, ADD_TO_CART, LOGIN, SIGN_UP, REDIRECT} from "../Action/action"

const intialState = {
  fetchProduct: [],
  cart: [],
  user: {},
  token: localStorage.getItem('token'),
  redi: {},
};

export const Product = (state = intialState,action) =>  {
  switch (action.type) {

    case SIGN_UP:
      return{
        ...state,
        user: action.payload,
      }
    
    case LOGIN:
      return{
        ...state,
        token: action.payload.token,
      }

    case SHOW_PRODUCT:
      return { 
        ...state, 
        fetchProduct: action.payload 
      };

    case PRO_FILTER:
      return{
        ...state,
        fetchProduct: action.payload.fetchProduct
      }

    case ADD_TO_CART:
      return{
        ...state,
        cart: action.payload
      }

    case REDIRECT:
      return{
        ...state,
        redi: action.payload
      }

    default:
      return state;
  }
};


export const SelecteProduct = (state = {},action) => {
  switch (action.type) {
    case SELECTE_PRODUCT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


