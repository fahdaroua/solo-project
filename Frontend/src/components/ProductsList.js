import React,{useState,useEffect} from 'react';
import ProductCard from "./ProductCard";
import axios from "axios"
const ProductsList = ({Genre,productName ,switchView}) => {
const [products , setProducts] = useState([])
useEffect(()=>{
    axios.get("http://localhost:5000/api/products")
    .then(({data}) => {
        setProducts(data)
    })
    .catch((err) => {
        console.log(err)
    })
   
},[])

    return (
        <div>
        <div className='products-list'>
            { Genre!== "" && products.filter((e)=>e.Genre.includes(Genre)).map((product,index) => {
                return (
                    <ProductCard key={index} product={product} switchView={switchView}/>
                )
            })}
             { productName !== "" && products.filter((e)=>e.name.toLowerCase().includes(productName.toLowerCase())).map((product,index) => {
                return (
                    <ProductCard key={index} product={product} switchView={switchView}/>
                )
            })}
             { Genre=== "" && productName === "" && products.map((product,index) => {
                return (
                    <ProductCard key={index} product={product} switchView={switchView}/>
                )
            })}
       
        </div>
        </div>
    )
}

export default ProductsList