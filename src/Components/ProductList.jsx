import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Productitem } from "./Productitem";
import { useSelector } from "react-redux";
import { Productdetails } from "./Productdetails";

export const ProductList = ({ search }) => {
  const myproducts = useSelector((state) => state.productReducer.product);
  const [product, SetProduct] = useState([...myproducts]);
  useEffect(() => {
    if (search !== "") {
      const filteredproduct = myproducts.filter(
        (item) =>
          item.title !== undefined &&
          item.title.toUpperCase().includes(search.toUpperCase())
      );
      SetProduct([...filteredproduct]);
    };
  }, [search]);
  useEffect(() => {
    SetProduct([...myproducts]);
  }, [myproducts]);
  return (
    <Card className="product-list">
      <Row>
        {product.map((item) => (
          <Col>
            <Productitem item={item} />
          </Col>
        ))}
      </Row>
      <Productdetails/>
    </Card>
  );
};
