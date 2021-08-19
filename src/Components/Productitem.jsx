import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Row, Col } from "react-bootstrap";

export const Productitem = () => {
  const dispatch = useDispatch();
  return (
    <Card className="Product-item">
      <Row>
        
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
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["soap", "cloths","shoes"],
              })
            }
          >
            +
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
