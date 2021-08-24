import React, { useEffect, useState } from "react";
import { Col, Row, Button ,Image} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Productdetails = () => {
  const [selectedproduct, setSelectedproduct] = useState([]);
  const myProducts = useSelector((state) => state.productReducer.product);
  const selectedId = useSelector(
    (state) => state.productReducer.selectedproductid
  );
  useEffect(() => {
    const filteredproduct = myProducts.filter((item) => item.id === selectedId);
    setSelectedproduct([...filteredproduct]);
  }, [selectedId]);
  return (
    <div>
      <Row>
        <Col md={4}>
       image

        </Col>
        <Col md={8}>Discription</Col>
      </Row>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};
