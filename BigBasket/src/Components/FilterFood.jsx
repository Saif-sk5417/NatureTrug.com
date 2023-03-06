import React from 'react'
import styles from "./ProductPage.module.css"
const FilterFood = () => {
  return (
    <div>
    <p className={styles.FilterProduct_heading}>Category</p>
    <div className={styles.FilterProduct_underLine}></div>
    <hr className={styles.FilterProduct_hr1}/>
    <div className={styles.FilterProduct_Category}>
       <p>Atta, Flours & Sooji </p>
       <p>Dal & Pulses</p>
       <p>Dry Fruites</p>
       <p>Edible Oils & Ghee</p>
       <p>Corn</p>
       <p>Rice & Sugar</p>
       <p>Jaggery</p>
    </div>
   </div>
  )
}

export default FilterFood