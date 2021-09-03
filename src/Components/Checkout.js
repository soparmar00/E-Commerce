import React  from 'react'
import { useSelector } from 'react-redux'


const Checkout = () => {

    const cart = useSelector((state) => state.Product.cart)
    console.log(cart)

    return (
    <div> {cart.length===0? (
    <div>
    <h1>No Product in Cart</h1>
    </div>): 
    (
    <div>
    <h2>Checkout</h2>
    {cart.map((cartItem,i) => 
    <div className="div-cart" key={i}>
    <div>
    <img src={cartItem.image} width="200" height="300"/>
    </div>
    <h3>{cartItem.title}</h3>
    <h3>{cartItem.price}</h3>
    </div>
    )}
    </div>
    )}
   </div>
    )
}

export default Checkout
    