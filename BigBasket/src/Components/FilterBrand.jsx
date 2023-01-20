
import { useEffect, useState } from "react"
import styles from "./ProductPage.module.css"
import { useSearchParams } from 'react-router-dom'
const FilterBrand = ({category,handelFilterCheckBox}) => {
    return (
       <div>
        <div>
         <p className={styles.FilterProduct_heading}>Brands</p>
         <div className={styles.FilterProduct_underLineBrand}></div>
         <hr className={styles.FilterProduct_hr1}/>
         </div>
         <div className={styles.FilterProduct_Brands}>
                <div>
                    <input 
                    type="checkBox" 
                    value = 'Fresho'
                    onChange={handelFilterCheckBox}
                    checked ={category.includes("Fresho")}
                     />
                    <label>Fresho</label>
                </div>
                <div>
                    <input 
                    type="checkBox" 
                    value = 'Organic'
                    checked ={category.includes("Organic")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Organic</label>
                </div>
                <div>
                    <input
                    type="checkBox"
                    value="Hoovu Fresh"
                    checked ={category.includes("Hoovu Fresh")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Hoovu Fresh</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'Gopalan Organic'
                    checked ={category.includes("Gopalan Organic")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Gopalan Organic</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'USA'
                    checked ={category.includes("USA")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>USA</label>
                </div>
         </div>
       </div>
    )
}

export  { FilterBrand }