import axios from 'axios'



export const getProducts = (category, limit) =>{

    if(category == 'common'){
        return axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
    }else{
        return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    }


}

