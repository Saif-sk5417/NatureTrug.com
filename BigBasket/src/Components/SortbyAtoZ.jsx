import styles from "./ProductPage.module.css"

const SortbyAtoZ = () =>{
    return (
        <div>
            <p className={styles.sortby_heading}>A to Z</p>
             <div className={styles.FilterProduct_Brands}>
             <div>
                  <input type="checkBox" />
                  <label>A to Z</label>
             </div>
             <div>
                  <input type="checkBox" />
                  <label>Z to A</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyAtoZ }