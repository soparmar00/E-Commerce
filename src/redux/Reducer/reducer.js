import {SHOW_PRODUCT,SELECTE_PRODUCT, PRO_FILTER, GET_CETEGORY} from "../Action/action"

const intialState = {
  fetchProduct: [],
};

export default function Product (state = intialState,action)  {
  switch (action.type) {
    case SHOW_PRODUCT:
      return { 
        ...state, 
        fetchProduct: action.payload 
      };

    case SELECTE_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    
    case PRO_FILTER:
      return{
        ...state,
        fetchProduct: action.payload.fetchProduct
      }

    default:
      return state;
  }
};

