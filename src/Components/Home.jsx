import React, { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { getproducts } from "../service/product";
import "./Product.css";
import { ProductList } from "./ProductList";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Productdetails } from "./Productdetails";

export const Home = () => {
  const [search, Setsearch] = useState(" ");
  const dispatch = useDispatch();
  const allproduct = async () => {
    const product = await getproducts();

    dispatch({
      type: "ADD_PRODUCT",
      data: product,
    });
  };
  useEffect(() => {
    allproduct();
  }, []);

  return (
    <div>
      <Router>
        <Navigation Setsearch={Setsearch} />

        <Switch>
          <div>
            <Route exact path="/">
              <ProductList search={search} />
            </Route>
            <Route path="/productdetails">
              <Productdetails />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};
