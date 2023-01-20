

import { useState } from "react"
import styles from "./ProductPage.module.css"

const SortbyRate = ({handelSort}) =>{

    return (
        <div>
            <p className={styles.sortby_heading}>Product Rating</p>
             <div 
             className={styles.FilterProduct_Brands}>
             <div>
                  <input
                   type="radio" 
                   value = 'asc'
                   name = 'sortBy'
                   onChange={handelSort}
                   />
                  <label>Ascending</label>
             </div>
             <div>
                  <input 
                  type="radio"
                  value = 'desc'
                  name = 'sortBy'
                  onChange={handelSort}
                  />
                  <label>Descending</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyRate }