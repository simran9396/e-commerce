import axios from "axios"


export const getproducts=async()=>{
    
    const resp=await axios.get(("https://fakestoreapi.com/products"))
    return resp.data
    // axios
    // .get("https://fakestoreapi.com/products")
    // .then ((res)=>
    // dispatchEvent({

    // })

    // .catch((e)=>console.log("error",e))

}