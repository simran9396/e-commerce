import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Row, Col, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Productitem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("item===>", item);
  return (
    <Card style={{ width: "18rem" }} className="Product-item">
      <Row>
        <Image src={`${item.image}`} width="200px" height="300px" />
      </Row>
      <Row>
        <Form.Label>&#36;{item.price} </Form.Label>
      </Row>
      <Row>
        <Form.Label>{item.title}</Form.Label>
      </Row>
      <Row className="button-bar">
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "soap",
              })
            }
          >
            -
          </Button>
        </Col>
        Add Product
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["soap", "cloths", "shoes"],
              })
            }
          >
            +
          </Button>
        </Col>
      </Row>

      <Link to="/productdetails">
        <Button
         onClick={()=>
          dispatch({
        type:"SELECTED_PRODUCT-ID"
      })
      }
         >details</Button>
      </Link>
    </Card>
  );
};
