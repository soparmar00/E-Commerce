import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProDetail} from "../Thunk/thunk"
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { addToCart, redirect } from "../redux/Action/action";

const ProductDetails = () => {

  const { productId } = useParams();
  const history = useHistory()
  const result = useSelector((state) => state.Select);
  const userId = useSelector((state) => state.Product.token)

  const { image, title, price, category, description } = result;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProDetail(productId))
}, [dispatch]);

const handleCart = (result) => {
  console.log(result)
  if(userId){
    dispatch(addToCart(result))
  }
  else{
    history.push('/login')
    dispatch(redirect(productId))
  }
}

const handleBuy = (result) => {
    handleCart(result)
    history.push('/checkout')
}

  return (
   <div>
    {Object.keys(result).length === 0 ? (<div>...Loading</div>) : 
    (
    <div>
    <h1>Product Details</h1>
    <div>
    <center>
    <div><img src={image} width="200" height="300" /></div>
    <div>
    <span>
    <br /> 
    <Button variant="primary" type="submit" onClick={() => handleCart(result)}> Add to cart</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="secondary" type="submit" onClick={() => handleBuy(result)}> Buy now</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <br />
    <br />
    </span>
    </div>
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
