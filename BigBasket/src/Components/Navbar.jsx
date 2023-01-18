
import { BsTagsFill } from "react-icons/bs"
import { IoMdPerson } from "react-icons/io"
import { FaShoppingBasket } from "react-icons/fa"
// import lo from "../../src/NATURE.png"
import lo from "../../src/prologo.png"

import "../Styles/Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav id="nav">
                <div id="logo">
                    <img src={lo} alt="logo" />
                </div>
                <div id="search">
                    <input id="input" type="text" placeholder="Search for Product..." />
                    <img id="searchlogo" src="search.png" alt="" />
                </div>
                <NavLink to = "/Cart"> <div id="basket">
                        <div>
                        <FaShoppingBasket className="icon"  />
                        </div>
                        <div>
                            My Basket
                        </div>
                </div></NavLink>
              <NavLink to ='/Login'><div id="register">
                    {/* <img src="person.png" alt="" /> */}
                    <div>
                    <IoMdPerson />
                    </div>
                    <div id="btn">Login</div>
                </div></NavLink>
            </nav>
            {/* <img id="arrow" src="newarrow.png" alt="" /> */}
            <div id="sec">
                <div id="category">
                    <span id="shop">SHOP BY CATEGORY
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
                                        </ul>
                                    </div>
                                </li></NavLink>
                                <li type="none" className="list"> Foodgrains, Oil & Masalas
                                    <div className="dropdown__menu-2">
                                        <ul>
                                            <li className="list" type="none">Atta, Flours and Sooji</li>
                                            <li className="list" type="none">Rice Products</li>
                                            <li className="list" type="none">Dals & Pulses</li>
                                            <li className="list" type="none">Organic Staples</li>
                                            <li className="list" type="none">Edible Oils & Ghee</li>
                                        </ul>
                                    </div>
                                </li>
                                <li type="none" className="list">Bakery, Cakes &
                                    <div className="dropdown__menu-3">
                                        <ul>
                                            <li className="list" type="none">Breads & Buns</li>
                                            <li className="list" type="none">Non Dairy</li>
                                            <li className="list" type="none">Gourmet Breads</li>
                                            <li className="list" type="none">Bakery Snacks</li>
                                            <li className="list" type="none">Cakes & Pastries</li>
                                        </ul>
                                    </div>
                                </li>
                                <li type="none" className="list">Oils & Masalas</li>
                                <li type="none" className="list">Oils & Masalas</li>
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