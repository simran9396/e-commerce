import React,{useState,useEffect} from 'react'
import { getAllinfo } from './selector'
import { useSelector } from 'react-redux';
import { Col,Row,Card } from 'react-bootstrap';
import { getproducts } from '../service/product';


export const Reduxapp = () => {
    const selector=useSelector(getAllinfo);
    const [data,setData]=useState(selector)
    const allinfo=async()=>{
        const product=await getproducts()

    }
    useEffect(()=>{
        allinfo()
    },[])

    return (
        <div>
            {data.map((item)=>{
                return(

          
            <Card>
            <Row>
                <Col>
                  <h3>{item.id}</h3>
                </Col>
                <Col>
                <h3>{item.email}</h3>
                </Col>
                <Col>
                <h3>{item.first_name}</h3>
                </Col>
                <Col>
                <h3>{item.last_name}</h3>
                </Col>
            </Row>
            </Card>
                )
              })}
        </div>
    )
}
