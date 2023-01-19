import styles from "./ProductPage.module.css"
import { SortbyAtoZ } from "./SortbyAtoZ"
import { SortbyPrice } from "./SortbyPrice"
import { SortbyRate } from "./SortbyRate"

const Sort = () =>{
    return (
        <div>
           <div>
           <p className={styles.FilterProduct_heading}>Relevance</p>
           <div className={styles.FilterProduct_underLineRelevance}></div>
           <hr className={styles.FilterProduct_hr1}/>
         </div>
         <div className={styles.FilterProduct_Sort_Main}>
             <SortbyPrice />
             <SortbyAtoZ />
             <SortbyRate />
         </div>
        </div>
    )
}


export { Sort }