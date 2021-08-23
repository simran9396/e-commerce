import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Navigation = ({ Setsearch }) => {
  const products = useSelector((state) => state.productReducer.product);

  return (
    <div>
      <Card className="topnav">
        <Row>
          <Col md={7}></Col>
          <Col md={3}>
            <Form.Control
              type="text"
              onChange={(e) => Setsearch(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <h3> cart:{products.length}</h3>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
