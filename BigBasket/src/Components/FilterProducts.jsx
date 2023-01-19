
import { FilterBrand } from './FilterBrand'
import { FilterCategory } from './FilterCategory'
import styles from './ProductPage.module.css'
import { Sort } from './Sort'

const FilterProduct = () =>
{
    return (
        <div className={styles.FilterProduct_Main}>
          <FilterCategory />
          <FilterBrand />
          <Sort />
        </div>
    )
}

export { FilterProduct }