import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Shopping from "./Shopping";
import Login from "./Login";
import Navigation from "./Navigation";
import Checkout from "./Checkout";
import Orders from "./Orders";
import ProductPage from "./Store/ProductPage";
import Homepage from "./Static/Homepage";
import OrdersPage from "./UserData/OrdersPage";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shopping" component={Shopping} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/login" component={Login} />
        <Route path="/orders/:orderNum" component={OrdersPage} />
        <Route path="/:productId" component={ProductPage} />
      </Switch>
    </div>
  );
}
