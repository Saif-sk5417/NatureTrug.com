
import { BsTagsFill } from "react-icons/bs"
import { IoMdPerson } from "react-icons/io"
import { FaShoppingBasket } from "react-icons/fa"
import Search from "./Search"
import NatureTrug from '../../src/NatureTrug.png'
import "../Styles/Navbar.css"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@chakra-ui/react"
import { LOGOUT_SUCCESS } from "../Redux/AuthReducer/actionTypes"
import { ChevronDownIcon } from "@chakra-ui/icons"
// import {MilkandDairy} from "../Pages/MilkandDairy"



const Navbar = () => {
   
    const Products = useSelector((store) => store.AppReducer.Products)
    const isAuth = useSelector((store) => store.AuthReducer.isAuth)
    const items = Products.filter((item) => item.CartQuantity > 0)
    const dispatch = useDispatch()
    const handelLogOut = () => {
        dispatch({ type: LOGOUT_SUCCESS })
        alert('Logout Successfull')
    }
    
    return (
        <div>
            <nav id="nav">
                <div id="logo">
                    <img src={NatureTrug} alt="logo" />
                </div>
                <div id="search">
                    <input id="input" type="text"  placeholder="     Search for name..." />
                    <img id="searchlogo" src="search.png" alt="" />
                   
                </div>
                <NavLink to="/Cart"> <div id="basket">
                    <div>
                        <FaShoppingBasket className="icon" />
                    </div>
                    <div>
                        My Basket items : {items.length}
                    </div>
                </div></NavLink>
                {isAuth ? <Button
                    onClick={handelLogOut}
                    colorScheme='whatsapp'
                >Logout</Button> :
                    <NavLink to='/Login'><div id="register">
                        {/* <img src="person.png" alt="" /> */}
                        <div>
                            <IoMdPerson />
                        </div>
                        <div id="btn">Login</div>
                    </div></NavLink>
                }
            </nav>

            {/* <img id="arrow" src="newarrow.png" alt="" /> */}
            <div id="sec">
                <div id="category">
                    <span id="shop">SHOP BY CATEGORY
                        <ChevronDownIcon fontSize={25} />
                        <div className="dropdown__menu">
                            <ul>
                                <NavLink to="/Fruites&Vegetables">  <li type="none" className="list">Fruits & Vegitables
                                    <div className="dropdown__menu-1">
                                        <ul>
                                            <li className="list" type="none">Fresh Vegetables</li>
                                            <li className="list" type="none">Herbs & Seasoning</li>
                                            <li className="list" type="none">Fresh Fruit</li>
                                            <li className="list" type="none">Organic Fruits & Vegetables</li>
                                            <li className="list" type="none">Cuts & Sprouts</li>
                                            <li className="list" type="none">Exotic Fruits</li>
                                            <li className="list" type="none">Flower Bouquets</li>
                                        </ul>
                                    </div>
                                </li></NavLink>
                                <NavLink to="/FoodGrains"> 
                                <li type="none" className="list"> Foodgrains, Oil & Masalas
                                    <div className="dropdown__menu-2">
                                        <ul>
                                            <li className="list" type="none">Atta, Flours and Sooji</li>
                                            <li className="list" type="none">Rice Products</li>
                                            <li className="list" type="none">Dals & Pulses</li>
                                            <li className="list" type="none">Organic Staples</li>
                                            <li className="list" type="none">Edible Oils & Ghee</li>
                                            <li className="list" type="none">Sugar & Jaggery</li>
                                            <li className="list" type="none">Masalas & Spices</li>
                                            <li className="list" type="none">Dry Fruits</li>
                                        </ul>
                                    </div>
                                </li>
                                </NavLink>
                                <NavLink to="/MilkandDairy">    <li type="none" className="list">Bakery, Cakes &
                                    <div className="dropdown__menu-3">
                                        <ul>
                                            <li className="list" type="none">Breads & Buns</li>
                                            <li className="list" type="none">Non Dairy</li>
                                            <li className="list" type="none">Gourmet Breads</li>
                                            <li className="list" type="none">Bakery Snacks</li>
                                            <li className="list" type="none">Cakes & Pastries</li>
                                            <li className="list" type="none">Cookies & Rusk</li>
                                            <li className="list" type="none">Ice Creams & Desserts</li>
                                        </ul>
                                    </div>
                                </li></NavLink>
                                <li type="none" className="list">Beverages
                                    <div className="dropdown__menu-4">
                                        <ul>
                                            <li className="list" type="none">Water</li>
                                            <li className="list" type="none">Health Drinks</li>
                                            <li className="list" type="none">Tea</li>
                                            <li className="list" type="none">Coffee</li>
                                            <li className="list" type="none">Fruits Juice</li>
                                        </ul>
                                    </div>
                                </li>
                                <li type="none" className="list">Branded Foods
                                    <div className="dropdown__menu-5">
                                        <ul>
                                            <li className="list" type="none">Breakfast Cereals</li>
                                            <li className="list" type="none">Veggies & Snacks</li>
                                            <li className="list" type="none">Biscuits</li>
                                            <li className="list" type="none">Namkeen</li>
                                            <li className="list" type="none">Sauces & Ketchup</li>
                                            <li className="list" type="none">Ready To Eat</li>
                                            <li className="list" type="none">Chocolates</li>
                                            <li className="list" type="none">Indian Mithai</li>
                                        </ul>
                                    </div>
                                </li>
                                <li type="none" className="list">Beauty & Hygiene
                                    <div className="dropdown__menu-6">
                                        <ul>
                                            <li className="list" type="none">Ferminine Hygiene</li>
                                            <li className="list" type="none">Bath & Hand Wash</li>
                                            <li className="list" type="none">Hair Care</li>
                                            <li className="list" type="none">Health & Medicine</li>
                                            <li className="list" type="none">Men's Grooming</li>
                                            <li className="list" type="none">Skin Care</li>
                                            <li className="list" type="none">Makeup</li>
                                            <li className="list" type="none">Fragrances</li>
                                        </ul>
                                    </div>
                                </li>
                                <li type="none" className="list">Household</li>
                                <li type="none" className="list">Eggs & Meat</li>
                                <li type="none" className="list">Baby Care</li>
                                <li type="none" className="list">View All</li>
                            </ul>
                        </div>
                    </span>

                </div>
                <div id="offer">
                    <BsTagsFill fontSize={"20px"} color={"red"} />
                    <span>OFFERS</span>
                </div>
            </div>
        </div>
    )
}

export { Navbar }