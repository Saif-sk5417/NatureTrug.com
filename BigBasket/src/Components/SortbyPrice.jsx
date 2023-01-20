



import styles from "./ProductPage.module.css"

const SortbyPrice = ({handelSort}) =>{
    return (
        <div>
            <p className={styles.sortby_heading}>Price</p>
             <div className={styles.FilterProduct_Brands}>
             <div>
                  <input 
                  type="radio" 
                  value = 'asc'
                  name = 'sortBy'
                  onChange={handelSort}
                  />
                  <label>Low To High</label>
             </div>
             <div>
                  <input 
                  type="radio" 
                  value = 'desc'
                  name = 'sortBy'
                  onChange={handelSort}
                  />
                  <label>High To Low</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyPrice }