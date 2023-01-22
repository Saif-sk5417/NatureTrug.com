import { PrivateRoutes } from "../AllRoutes/PrivateRoutes"
import { ProductList } from "../Components/ProductList"
import SlideCard from "../Components/Home/SlideCard"
import { Navbar } from "../Components/Navbar"
import { FilterProduct } from "../Components/FilterProducts"
import styles from '../Components/ProductPage.module.css'
import Fruites from "../Components/Home/Fruites"
import SimpleSlider from "../Components/Home/SlideCard"
import { Footer } from "../Components/Footer"
import Gotottop from "../Components/GotoTop"
const FruitesandVeggies = () =>
{
    return (
        <>
        <div>
            <Navbar/>
            <div className={styles.ProductPage_TopImage}>
                <img src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg" alt="FruitAndVegetables"/>
            </div>
            <div  className={styles.ProductPage_main}>
            <FilterProduct />
            <ProductList />
            
            </div>
        </div>
        <div>
            <Footer />
            <Gotottop />
        </div>
        </>
    )
}

export default FruitesandVeggies