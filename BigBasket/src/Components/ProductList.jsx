import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductsData } from "../Redux/AppReducer/action"
import styles from './ProductPage.module.css'
import { RiTruckFill } from 'react-icons/ri'
import SingleCard from "./SingleCard/SingleCard"

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
        <div className={styles.ProductList_Main}>
            <p className={styles.ProductList_Heading}>Fruits & Vegetables (110)</p>
            <div className={styles.ProductList_Truck}>
                  <RiTruckFill className={styles.ProductList_Truckicon}/>
                  <p>All Products</p>
            </div>
            <hr className={styles.ProductList_Hr1}/>
            <div className={styles.ProductList_SingleCard}>
                {Products.map((el) =>{
                    return(
                        <SingleCard
                         key = {el.id}  
                         name = {el.name}
                         image = {el.Image}
                         Price = {el.Price}
                         Category = {el.category}
                         Weights = {el.Weight}
                         rating = {el.rating}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export { ProductList }