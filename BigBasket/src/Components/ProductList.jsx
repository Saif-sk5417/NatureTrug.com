import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductsData } from "../Redux/AppReducer/action"
import styles from './ProductPage.module.css'
import { RiTruckFill } from 'react-icons/ri'
import SingleCard from "./SingleCard/SingleCard"
import { useLocation, useSearchParams } from "react-router-dom"

const ProductList = () =>{
    const Products = useSelector((store) => store.AppReducer.Products)
    const dispatch = useDispatch()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    useEffect(()=>{
        if(location || Products.length === 0)
        {   
            const getProductParams = {
                params : {
                    category : searchParams.getAll("category"),
                }
            }
            dispatch(getProductsData(getProductParams))
        }
    },[Products.length , dispatch ,location.search])
    return (
        <div className={styles.ProductList_Main}>
            <p className={styles.ProductList_Heading}>Fruits & Vegetables ({Products.length})</p>
            <div className={styles.ProductList_Truck}>
                  <RiTruckFill className={styles.ProductList_Truckicon}/>
                  <p>All Products</p>
            </div>
            <hr className={styles.ProductList_Hr1}/>
            <div className={styles.ProductList_SingleCard}>
                {Products.map((el) =>{
                    return(
                        <SingleCard
                         id = {el.id}
                         key = {el.id}  
                         name = {el.name}
                         image = {el.Image}
                         Price = {el.Price}
                         Category = {el.category}
                         Weights = {el.Weight}
                         rating = {el.rating}
                         CartQuantity ={el.CartQuantity}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export { ProductList }