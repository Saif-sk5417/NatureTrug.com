
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
  const initialSort = searchParams.getAll("sort")
  const [category,setcategory] = useState(initialCategory || [])
  const [sort,setSortby] = useState(initialSort[0] || "")
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
    setSortby(e.target.value)
  }
  console.log(sort)
  useEffect(()=>{
   let params = {}
   params.category = category
   sort && (params.sort = sort)
   setSearchParams(params)
  },[category,setSearchParams,sort])
    return (
        <div className={styles.FilterProduct_Main}>
          <FilterCategory />
          <FilterBrand  
          category={category}
          handelFilterCheckBox ={handelFilterCheckBox}
          />
          <Sort handelSort={handelSort}/>
        </div>
    )
}

export { FilterProduct }