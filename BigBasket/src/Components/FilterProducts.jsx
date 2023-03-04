import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterBrand } from './FilterBrand'
import { FilterCategory } from './FilterCategory'
import styles from './ProductPage.module.css'
import Search from './Search'
import { Sort } from './Sort'

const FilterProduct = () =>
{
  const [searchParams,setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const initialOrder=searchParams.get("order")
  const initialName=searchParams.getAll("name")
  const [category,setcategory] = useState(initialCategory || [])
  const [order,setOrder] = useState(initialOrder|| "")
  const [name,setName] = useState(initialName|| "")
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

  const handelFilter = (e) =>{
    const newSearch = [...name]
    if(newSearch.includes(e.target.value))
    {
        newSearch.splice(newSearch.indexOf(e.target.value),1)
    }
    else 
    {
        newSearch.push(e.target.value)
    }
    setName(newSearch)
    }
  const handelSort = (e) =>{
    setOrder(e.target.value)
  }
  
 
  useEffect(()=>{
   let params = {}
   params.category = category
   params.name=name
   order && (params.order = order)
   setSearchParams(params)
  },[category,setSearchParams,order,name])
    return (
        <div className={styles.FilterProduct_Main}>
           <Search name={name}
            handelFilter={handelFilter}/>
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