import React ,{useEffect,useState}from 'react'
import { Navigation } from './Navigation'
import { getproducts } from '../service/product'
import './Product.css'
import { ProductList } from './ProductList'
import {useDispatch} from 'react-redux'
import { Switch,Router,Route } from 'react-router-dom'


export const Home = () => {
  const[search,Setsearch]=useState(" ")
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
          <Router>
          <Switch>
            <Route>
             <Navigation Setsearch={Setsearch}/>
              </Route>
            <Route>
           <ProductList search={search}/>
           </Route>
           </Switch>
           </Router>
 
            
        </div>
    )
}
