
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterBrand } from './FilterBrand'
import { FilterCategory } from './FilterCategory'
import styles from './ProductPage.module.css'
import { Sort } from './Sort'

const FilterProduct = () =>
{
  const [searchParams,setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const initialOrder=searchParams.get("order")
  const [category,setcategory] = useState(initialCategory || [])
  const [order,setOrder] = useState(initialOrder|| "")
  const handelFilterCheckBox = (e) =>{
  const newcategories = [...category]
  if(newcategories.includes(e.target.value))
  {
      newcategories.splice(newcategories.indexOf(e.target.value),1)
  }
  else 
  {
      newcategories.push(e.target.value)
  }
  setcategory(newcategories)
  }
  const handelSort = (e) =>{
    setOrder(e.target.value)
  }
  
 
  useEffect(()=>{
   let params = {}
   params.category = category
   order && (params.order = order)
   setSearchParams(params)
  },[category,setSearchParams,order])
    return (
        <div className={styles.FilterProduct_Main}>
          <FilterCategory />
          <FilterBrand  
          category={category}
          handelFilterCheckBox ={handelFilterCheckBox}
          />
          <Sort
          order={order}
           handelSort={handelSort}
          />
        </div>
    )
}

export { FilterProduct }