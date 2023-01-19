



import styles from "./ProductPage.module.css"

const SortbyPrice = () =>{
    return (
        <div>
            <p className={styles.sortby_heading}>Price</p>
             <div className={styles.FilterProduct_Brands}>
             <div>
                  <input type="checkBox" />
                  <label>High To Low</label>
             </div>
             <div>
                  <input type="checkBox" />
                  <label>High To Low</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyPrice }