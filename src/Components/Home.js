import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProduct } from "../Thunk/thunk";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Home = () => {

  const dispatch = useDispatch();
  const result = useSelector((state) => state.Product.fetchProduct);
  
  const cat = null

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
      console.log(filter.limit, filter.sort)
      dispatch(filterProduct(filter))
  }

  const recordFields = result.map((fields) => {
  const { id, title, image, price, category } = fields;

  return (
    <div className="four column wide" key={id}>
    <Link to={`/product/${id}`}>
    <div className="ui link cards">
    <div className="card">
    <div >
    <img src={image} alt={title} width="150" height="200"/>
    </div>
    <div className="content">
    <div className="header">{title}</div>
    <div className="meta price">$ {price}</div>
    <div className="meta">{category}</div>
    </div>  
    </div>
    </div>
    </Link>
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
    <option value="asce">Asce</option>
    <option value="desc">Desc</option>
    </select>&nbsp;&nbsp;&nbsp;&nbsp;

    <select name='categ'  onChange={handleChange}>
    {cat = result.map((procat) => <option value={procat.category}>Category</option>)}
    </select>&nbsp;&nbsp;&nbsp;&nbsp;

    <button type="submit">Apply Filter</button>
    </form>
    </center>
    <div>{recordFields}</div>
    </div>
  );
};

export default Home;
