import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProDetail} from "../Thunk/thunk"

const ProductDetails = () => {

  const { productId } = useParams();

  const result = useSelector((state) => state.Product);
  console.log(result)

  const { image, title, price, category, description } = result;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProDetail(productId))
}, [dispatch]);

  return (
   <div>
    {Object.keys(result).length === 0 ? (<div>...Loading</div>) : 
    (
    <div>
    <h1>Product Details</h1>
    <div>
    <center>
    <div><img src={image} width="200" height="300" /></div>
    <div >
    <h2>{title}</h2>
    <h3>${price}</h3>
    <h3>{category}</h3>
    <h3>{description}</h3>
    </div>  
    </center>
    </div>
    </div>
    )}
   </div> 
) 
}

export default ProductDetails;
