import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
export const Navigation = () => {
    const products=useSelector((state)=>state.productReducer.product)
    return (
        <div>
            <Card className="topnav">
                <Row>
                    <Col md={10}>
                     
                    </Col>
                    <Col md={2}>
                       <h3> cart:{products.length}</h3>

                    </Col>
                </Row>
            </Card>
        
 
            
        </div>
    )
}
