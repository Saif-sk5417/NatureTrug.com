

import styles from "./ProductPage.module.css"
import Search from "./Search"
const FoodBrand = ({category,handelFilterCheckBox}) => {
    return (
       <div>
       
        <div>
         <p className={styles.FilterProduct_heading}>Brands</p>
         <div className={styles.FilterProduct_underLineBrand}></div>
         <hr className={styles.FilterProduct_hr1}/>
         </div>
         <div className={styles.FilterProduct_Brands}>
                <div>
                    <input 
                    type="checkBox" 
                    value = 'BB Royal'
                    onChange={handelFilterCheckBox}
                    checked ={category.includes("BB Royal")}
                     />
                    <label>BB Royal</label>
                </div>
                <div>
                    <input 
                    type="checkBox" 
                    value = 'BB Popular'
                    checked ={category.includes("BB Popular")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>BB Popular</label>
                </div>
                <div>
                    <input
                    type="checkBox"
                    value="Hoovu Fresh"
                    checked ={category.includes("Hoovu Fresh")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Hoovu Fresh</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'Dawat'
                    checked ={category.includes("Dawat")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Dawat</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'Gopalan Organic'
                    checked ={category.includes("Gopalan Organic")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Gopalan Organic</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'Tata Sampann'
                    checked ={category.includes("Tata Sampann")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Tata Sampann</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'Fresho'
                    checked ={category.includes("Fresho")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Fresho</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'BB Royal Organic'
                    checked ={category.includes("BB Royal Organic")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>BB Royal Organic</label>
                </div>
                <div>
                    <input 
                    type="checkBox"
                    value = 'Fresho Organic'
                    checked ={category.includes("Fresho Organic")}
                    onChange={handelFilterCheckBox}
                    />
                    <label>Fresho Organic</label>
                </div>
         </div>
       </div>
    )
}

export  { FoodBrand }