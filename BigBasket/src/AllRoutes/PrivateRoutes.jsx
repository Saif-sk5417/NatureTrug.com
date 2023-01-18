import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"



const PrivateRoutes = ({children}) => 
{
    const isAuth = useSelector((store) => store.AuthReducer.isAuth)
    console.log(isAuth)
    const location = useLocation()
    if(!isAuth)
    {
        return <Navigate to ='/Login'  replace state={{data : location.pathname}}/>
    }
    return children
}

export { PrivateRoutes }