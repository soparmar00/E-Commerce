import { combineReducers } from "redux";
import {Product, SelecteProduct}  from "./reducer";
export const rootrReducer = combineReducers({
   Product: Product,
   Select: SelecteProduct 

});
