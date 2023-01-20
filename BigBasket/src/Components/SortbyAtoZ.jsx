import styles from "./ProductPage.module.css"

const SortbyAtoZ = ({handelSort}) =>{
    return (
        <div>
            <p className={styles.sortby_heading}>A to Z</p>
             <div className={styles.FilterProduct_Brands}>
             <div>
                  <input
                   type="radio"
                   value = 'asc'
                   name = 'sortBy'
                   onChange={handelSort}
                   />
                  <label>A to Z</label>
             </div>
             <div>
                  <input 
                  type="radio" 
                  value = 'desc'
                  name = 'sortBy'
                  onChange={handelSort}
                  />
                  <label>Z to A</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyAtoZ }