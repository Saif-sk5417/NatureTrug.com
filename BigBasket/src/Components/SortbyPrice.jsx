



import styles from "./ProductPage.module.css"

const SortbyPrice = ({order,handelSort}) =>{
    return (
        <div>
            <p className={styles.sortby_heading}>Price</p>
             <div className={styles.FilterProduct_Brands}>
             <div>
                  <input 
                  type="radio" 
                  value = 'asc'
                  name = 'sort_by'
                  onChange={handelSort}
                  defaultChecked={order==='asc'}
                  />
                  <label>Low To High</label>
             </div>
             <div>
                  <input 
                  type="radio" 
                  value = 'desc'
                  name = 'sort_by'
                  onChange={handelSort}
                  defaultChecked={order==='desc'}
                  />
                  <label>High To Low</label>
            </div>
            </div>
        </div>
    )
}

export { SortbyPrice }