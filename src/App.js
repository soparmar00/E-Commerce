import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import PrivateRoute from "./Components/Private";

function App() {
  return (
    <div className="App">
    <Router>
    < Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product/:productId" component={ProductDetails} />
    <PrivateRoute path="/checkout" component={Checkout} />
    <Route path ="/login" component={Login} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
