import React from 'react'
import { Col,Row,Button} from 'react-bootstrap'
import {Link } from 'react-router-dom'


export const Productdetails = () => {
    return (
        <div>
            <Row>
                <Col md={4}>Images
                </Col>
                <Col md={8}>Discription
                </Col>
            </Row>
            <Link>
            <Button>Back</Button>
            </Link>
            
        </div>
    )
}
