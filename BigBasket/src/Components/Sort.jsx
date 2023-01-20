import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./ProductPage.module.css"
import { SortbyAtoZ } from "./SortbyAtoZ"
import { SortbyPrice } from "./SortbyPrice"
import { SortbyRate } from "./SortbyRate"

const Sort = ({handelSort}) =>{
    return (
        <div>
           <div>
           <p className={styles.FilterProduct_heading}>Relevance</p>
           <div className={styles.FilterProduct_underLineRelevance}></div>
           <hr className={styles.FilterProduct_hr1}/>
         </div>
         <div className={styles.FilterProduct_Sort_Main}>
             <SortbyPrice handelSort={handelSort} />
             <SortbyAtoZ handelSort={handelSort} />
             <SortbyRate handelSort={handelSort} />
         </div>
        </div>
    )
}


export { Sort }