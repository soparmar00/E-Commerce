import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProduct } from "../Thunk/thunk";
import { Link } from "react-router-dom";


const Home = () => {

  const dispatch = useDispatch();
  const result = useSelector((state) => state.Product.fetchProduct);
  const [filter, setFilter] = useState({limit: '', sort: '', categ:''})

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  
  const handleChange = (e) => {
      const {name, value} = e.target;
      setFilter({...filter, [name]: value})
  }

  const handleFilterSubmit = (e) => {
      e.preventDefault()
      dispatch(filterProduct(filter))
  }

  const recordFields = result.map((fields) => {
  const { id, title, image, price, category } = fields;

  return (
    <div className="four column wide" key={id}>
    
    <div className="ui link cards">
    <div className="card">
    <Link to={`/product/${id}`}>
    <div >
    <img src={image} alt={title} width="150" height="200"/>
    </div>
     </Link>
    <div className="content">
    <div className="header">{title}</div>
    <div className="meta price">$ {price}</div>
    <div className="meta">{category}</div>
    </div>  
    </div>
    </div>
   
    </div>
  );
  });
  
  return (
    <div >
    <h1>Product List</h1>
    <center>
    <form onSubmit={handleFilterSubmit}>
    <input type='number' name='limit' placeholder='Enter limit' onChange={handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;

    <select name='sort'  onChange={handleChange}>
    <option value="asce">Ascending</option>
    <option value="desc">Descending</option>
    </select>&nbsp;&nbsp;&nbsp;&nbsp;

    <select name='categ'  onChange={handleChange}>
    <option value="men's clothing">Men's clothing</option>
    <option value="jewelery">Jewelery</option>
    <option value="electronics">Electronics</option>
    <option value="women's clothing">Women's clothing</option>
    </select>&nbsp;&nbsp;&nbsp;&nbsp;

    <button type="submit">Apply Filter</button>
    </form>
    </center>
    <div>{recordFields}</div>
    </div>
  );
};

export default Home;
