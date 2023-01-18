import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductsData } from "../Redux/AppReducer/action"



const SingleProductPage = () =>
{  
    const [SingleProduct,setSingleProduct] = useState({})
    const Products = useSelector((store) => store.AppReducer.Products )
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(()=>{
        if(Products.length === 0)
        {
            dispatch(getProductsData())
        }
    },[Products.length , dispatch])
    useEffect(()=>{
    if(id){
        const single = Products.find((el)=>el.id === Number(id))
        console.log(single)
        single && setSingleProduct(single)
    }
    },[id])
    return (
        <div>
            SingleProductPage
        </div>
    )
}

export default SingleProductPage