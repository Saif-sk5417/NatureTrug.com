import { NavLink } from "react-router-dom"
import { AddProduct } from "../Components/Admin/AddProduct"
import { Dashboard } from "../Components/Admin/Dashboard"
import { EditProduct } from "../Components/Admin/EditProduct"
import  {Order}  from "../Components/Admin/Order"


const AdminPage = () =>
{
    return (
       <div>
       <NavLink to ='/DashBoard'><Dashboard /></NavLink>
       <NavLink to ='/AddProduct'><AddProduct /></NavLink>
       <NavLink to = '/EditProduct'><EditProduct /></NavLink>
       <NavLink to ='/Order'><Order /></NavLink>
       </div> 
    )
}
export default AdminPage