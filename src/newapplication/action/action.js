import axios from 'axios'
export const getproducts=async()=>{
    const resp=await axios.get((
       " https://reqres.in/api/users"
    ))
    return resp.data
}