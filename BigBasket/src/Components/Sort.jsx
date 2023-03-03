import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./ProductPage.module.css"

import { SortbyPrice } from "./SortbyPrice"


const Sort = ({order,handelSort}) =>{
    return (
        <div>
           <div>
           <p className={styles.FilterProduct_heading}>Relevance</p>
           <div className={styles.FilterProduct_underLineRelevance}></div>
           <hr className={styles.FilterProduct_hr1}/>
         </div>
         <div className={styles.FilterProduct_Sort_Main}>
             <SortbyPrice  order={order} handelSort={handelSort} />
           
             
         </div>
        </div>
    )
}


export { Sort }