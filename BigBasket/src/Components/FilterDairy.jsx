import React from 'react'
import styles from "./ProductPage.module.css"
const FilterDairy = () => {
  return (
    <div>
    <p className={styles.FilterProduct_heading}>Category</p>
    <div className={styles.FilterProduct_underLine}></div>
    <hr className={styles.FilterProduct_hr1}/>
    <div className={styles.FilterProduct_Category}>
       <p>Bakery,Cakes & Dairy</p>
       <p>Bread & Buns</p>
       <p>Cakes & Pastries</p>
       <p>Cookies, Rust & Khari</p>
       <p>Dairy</p>
       <p>Gourmet Breads</p>
       <p>Ice Creams & Desserts</p>
    </div>
   </div>
  )
}

export default FilterDairy