import { Route, Routes } from "react-router-dom"
import { AddProduct } from "../Components/Admin/AddProduct"
import { Dashboard } from "../Components/Admin/Dashboard"



import { EditProduct } from "../Components/Admin/EditProduct"
import { Order } from "../Components/Admin/Order"
import Payment from "../Components/Payment"
import AdminPage from "../Pages/AdminPage"
import CartPages from "../Pages/CartPages"
import FoodGrains from "../Pages/FoodGrains"
import FruitesandVeggies from "../Pages/FruitesandVeggies"
import HomePages from "../Pages/Homepages"
import LoginPages from "../Pages/LoginPages"
import SingleProductPage from "../Pages/SingleProductPage"
import { PrivateRoutes } from "./PrivateRoutes"



const MainRoutes = () =>
{
    return (
         <Routes>
             <Route path = '/' element={<HomePages />}/>
             <Route path = '/Login' element={<LoginPages />}/>
             <Route path = '/Admin' element={<AdminPage />}/>
             <Route path = '/Cart' element={<PrivateRoutes><CartPages /></PrivateRoutes>}/>
             <Route path = "/Payment" element={<Payment />}/>
             <Route path = '/Fruites&Vegetables' element={<FruitesandVeggies />}/>
             <Route path = '/FoodGrains' element={<FoodGrains />}/>
             <Route path = '/FoodGrains/:id' element={<SingleProductPage />}/>  
             <Route path = '/Fruites&Vegetables/:id' element={<SingleProductPage />}/>
             <Route path = '/Dashboard' element = {<Dashboard />}/>
            {/* <Route path="/Dashboard1" element={<DashBoard1 />} /> */}
             <Route path = '/Order' element = {<Order/>}/>
             <Route path = '/AddProduct' element = {<AddProduct />}/>
             <Route path = '/EditProduct' element = {<EditProduct />}/>
         </Routes>
    )
}

export { MainRoutes }