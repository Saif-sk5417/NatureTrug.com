import { Route, Routes } from "react-router-dom"
import AdminPage from "../Pages/AdminPage"
import CartPages from "../Pages/CartPages"
import FoodGrains from "../Pages/FoodGrains"
import FruitesandVeggies from "../Pages/FruitesandVeggies"
import HomePages from "../Pages/Homepages"
import LoginPages from "../Pages/LoginPages"
import SingleProductPage from "../Pages/SingleProductPage"



const MainRoutes = () =>
{
    return (
         <Routes>
             <Route path = '/' element={<HomePages />}/>
             <Route path = '/Login' element={<LoginPages />}/>
             <Route path = '/Admin' element={<AdminPage />}/>
             <Route path = '/Cart' element={<CartPages />}/>
             <Route path = '/Fruites&Vegetables' element={<FruitesandVeggies />}/>
             <Route path = '/FoodGrains' element={<FoodGrains />}/>
             <Route path = '/FoodGrains/:id' element={<SingleProductPage />}/>  
             <Route path = '/Fruites&Vegetables/:id' element={<SingleProductPage />}/>
         </Routes>
    )
}

export { MainRoutes }