import { Link, Route, Routes } from "react-router-dom"
import { AddProduct } from "../Components/Admin/AddProduct"
import { Dashboard } from "../Components/Admin/Dashboard"

import DashBoard1 from "../Components/Admin/DashBoard1"
import { EditProduct } from "../Components/Admin/EditProduct"
import { Order } from "../Components/Admin/Order"
import Payment from "../Components/Payment"
import AdminPage from "../Pages/AdminPage"
import CartPages from "../Pages/CartPages"
import FoodGrains from "../Pages/FoodGrains"
import FruitesandVeggies from "../Pages/FruitesandVeggies"
import HomePages from "../Pages/Homepages"
import LoginPages from "../Pages/LoginPages"
import MilkandDairy from "../Pages/MilkandDairy"
import Signup from "../Pages/Signup"
import SingleProductPage from "../Pages/SingleProductPage"



const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePages />} />
            <Route path='/Login' element={<LoginPages />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Admin' element={<AdminPage />} />
            <Route path='/Cart' element={<CartPages />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path='/Fruites&Vegetables' element={<FruitesandVeggies />} />
            <Route path='/FoodGrains' element={<FoodGrains />} />
            <Route path='/FoodGrains/:id' element={<SingleProductPage />} />
            <Route path='/Fruites&Vegetables/:id' element={<SingleProductPage />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path="/Dash" element={<DashBoard1 />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/AddProduct' element={<AddProduct />} />
            <Route path='/EditProduct' element={<EditProduct />} />
            <Route path="/MilkandDairy" element={<MilkandDairy/>}/>
        </Routes>
    )
}

export { MainRoutes }