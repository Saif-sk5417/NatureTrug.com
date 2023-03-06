
import FilterFood from '../Components/FilterFood'
import FoodList from '../Components/FoodList'
import { Footer } from '../Components/Footer'
import Gotottop from '../Components/GotoTop'
import { Navbar } from '../Components/Navbar'
import styles from '../Components/ProductPage.module.css'
const FoodGrains = () =>
{
    return (
        <>
        <div>
            <Navbar />
            <div className={styles.ProductPage_TopImage}>
                <img src="https://www.bigbasket.com/media/uploads/banner_images/YXNP12283-1200x300-08022023.jpg" alt="FruitAndVegetables" />
            </div>
            <div className={styles.ProductPage_main}>
                <FilterFood />
                <FoodList />
          
            </div>
        </div>
        <div>
            <Footer />
            <Gotottop />
        </div>
    </>
    )
}

export default FoodGrains