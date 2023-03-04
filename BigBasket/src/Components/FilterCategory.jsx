

import styles from "./ProductPage.module.css"


const FilterCategory = () =>{
    return (
        <div>
           
            <p className={styles.FilterProduct_heading}>Category</p>
            <div className={styles.FilterProduct_underLine}></div>
            <hr className={styles.FilterProduct_hr1}/>
            <div className={styles.FilterProduct_Category}>
               <p>Fruits & Vegetables</p>
               <p>Cuts & Sprouts</p>
               <p>Exotic Fruits & Veggies</p>
               <p>Flower Bouquets, Bunches</p>
               <p>Fresh Fruits</p>
               <p>Fresh Vegetables</p>
               <p>Herbs & Seasonings</p>
            </div>
           </div>
    )
}

export { FilterCategory }