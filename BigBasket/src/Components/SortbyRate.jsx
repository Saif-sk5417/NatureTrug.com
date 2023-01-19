

import styles from "./ProductPage.module.css"

const SortbyRate = () =>{
    return (
        <div>
            <p className={styles.sortby_heading}>Product Rating</p>
             <div className={styles.FilterProduct_Brands}>
             <div>
                  <input type="checkBox" />
                  <label>Ascending</label>
             </div>
             <div>
                  <input type="checkBox" />
                  <label>Descending</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyRate }