import React ,{useEffect}from 'react'
import { Navigation } from './Navigation'
import { getproducts } from '../service/product'
import './Product.css'
import { ProductList } from './ProductList'
import {useDispatch} from 'react-redux'


export const Home = () => {
    const dispatch=useDispatch()
    const allproduct=async()=>{
   const product =await getproducts()
   console.log("product",product)
   dispatch({
     type:"ADD_PRODUCT",
     data:product,
   })
    }
    useEffect(()=>{
      allproduct()
    },[])

    return (
        <div>
           <Navigation/>
           <ProductList/>
            
        </div>
    )
}
