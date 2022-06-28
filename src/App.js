import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productlist">
          <ProductList />
        </Route>
        <Route path="/shoppingcart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
