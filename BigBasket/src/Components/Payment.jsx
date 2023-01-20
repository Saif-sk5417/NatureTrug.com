import "../Styles/Payment.css"
import React from 'react'
import { Navbar } from "../Components/Navbar"
import { ModalComponent } from "./Modal"
import { Footer } from "./Footer"

const Payment = () => {
    return (
        <>
            <div>

                <Navbar />
            </div>
            <div>
                <div id="navbar">
                    <h2>Place Your Order</h2>
                </div>
                <div id="nav_container">
                    <form action="" >
                        <div class="row">
                            <div class="col">
                                <h3 class="title">Billing Address</h3>
                                <div class="inputBox">
                                    <span>Name: </span>
                                    <input type="text" placeholder="Enter Full Name" />
                                </div>
                                <div class="inputBox">
                                    <span>Email: </span>
                                    <input type="email" placeholder="Enter Email Address" />
                                </div>
                                <div class="inputBox">
                                    <span>Address: </span>
                                    <input type="text" placeholder="Enter Address" />
                                </div>
                                <div class="inputBox">
                                    <span>City: </span>
                                    <input type="text" placeholder="Enter City Name" />
                                </div>

                                <div class="flex">
                                    <div class="inputBox">
                                        <span>State: </span>
                                        {/* <!-- <input type="text" placeholder="Enter State" /> --> */}
                                        <select name="state" id="state" class="form-control">
                                            <option value="">Select State</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Dadar and Nagar Haveli">
                                                Dadar and Nagar Haveli
                                            </option>
                                            <option value="Daman and Diu">Daman and Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Puducherry">Puducherry</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                        </select>
                                    </div>
                                    <div class="inputBox">
                                        <span>Pin Code: </span>
                                        <input type="text" placeholder="Enter Pin Code" />
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <h3 class="title">Payment</h3>
                                <div class="inputBox">
                                    <span>Cards Accepted: </span>
                                    <img id="visa"
                                        src="https://lh4.googleusercontent.com/4c8aPBG1Lg-6jHQ2OL_CS-Nhz-SbbeVowj5enkGWIErXrPrb1gD_8Q5ltp9cfVJ3WTU=w2400"
                                        alt="visa"
                                    />
                                </div>
                                <div class="inputBox">
                                    <span>Name on Card: </span>
                                    <input type="text" placeholder="Enter Name on Card" id="name" />
                                </div>
                                <div class="inputBox">
                                    <span>Debit Card Number: </span>
                                    <input type="number" placeholder="Enter Card Number" id="card" />
                                </div>
                                {/* <div class="inputBox">
              <span>Exp Month: </span>
              <input type="number" placeholder="MM " />
            </div>  */}
                                <div class="flex">
                                    <div class="inputBox">
                                        <span>Exp Month: </span>
                                        <input type="number" placeholder="MM" id="month" />
                                    </div>
                                    <div class="inputBox">
                                        <span>Exp Year: </span>
                                        <input type="text" placeholder="YYYY" id="year" />
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="inputBox">
                                        <span>Pin: </span>
                                        <input type="password" placeholder="****" id="pin" />
                                    </div>
                                    <div class="inputBox">
                                        <span>CVV: </span>
                                        <input type="text" placeholder="Enter CVV" id="cvv" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <input type="submit" value="Make Payment" id="submit" /> */}

                        < ModalComponent />

                    </form>
                </div>
            </div>
            
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Payment