import React,{useState} from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import { Productitem } from './Productitem'
import { useSelector } from 'react-redux'

export const ProductList=()=>{
    const myproducts=useSelector(state=>state.productReducer.product)
    conste[product,SetProduct]=useState([...myproducts])
    return(
        <Card className="product-list">
            <Row>
              <Col>
              <Productitem/>
              </Col>  
              <Col>
              <Productitem/>
              </Col>  
              <Col>
              <Productitem/>
              </Col>  
            </Row>
        </Card>

    )
}