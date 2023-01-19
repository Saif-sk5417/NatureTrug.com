
import styles from "./ProductPage.module.css"

const FilterBrand = () => {
    return (
       <div>
        <div>
         <p className={styles.FilterProduct_heading}>Brands</p>
         <div className={styles.FilterProduct_underLineBrand}></div>
         <hr className={styles.FilterProduct_hr1}/>
         </div>
         <div className={styles.FilterProduct_Brands}>
                <div>
                    <input type="checkBox" />
                    <label>Fresho</label>
                </div>
                <div>
                    <input type="checkBox" />
                    <label>Organic</label>
                </div>
                <div>
                    <input type="checkBox" />
                    <label>Hoovu Fresh</label>
                </div>
                <div>
                    <input type="checkBox" />
                    <label>Gopalan Organic</label>
                </div>
                <div>
                    <input type="checkBox" />
                    <label>USA</label>
                </div>
         </div>
       </div>
    )
}

export  { FilterBrand }