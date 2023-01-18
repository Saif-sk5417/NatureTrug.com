import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductsData } from "../Redux/AppReducer/action"



const ProductList = () =>{
    const Products = useSelector((store) => store.AppReducer.Products)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(Products.length === 0)
        {
            dispatch(getProductsData())
        }
    },[Products.length , dispatch])
    return (
        <div>
            ProducList
        </div>
    )
}

export { ProductList }