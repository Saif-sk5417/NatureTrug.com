import React from "react"
import "./Footer.css"


const Footer = () => {
    return (
        <div className="Full_footer">
            <div className="Footer_row">
                <div className="Each_row">
                    <h4 className="Footer_head">Bigbasket</h4>
                    <p>About Us</p>
                    <p>In News</p>
                    <p>Green bigbasket</p>
                    <p>Privacy Policy</p>
                    <p>Affiliate</p>
                    <p>Terms and Conditions</p>
                    <p>Careers At bigbasket</p>
                    <p>bb Instant</p>
                    <p>bb Daily</p>
                    <p>bb Blog</p>
                </div>
                <div className="Each_row">
                    <h4 className="Footer_head">Help</h4>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>bb Wallet FAQs</p>
                    <p>bb Wallet T&Cs</p>
                    <p>Vendor Connect</p>
                </div>
                <div className="Each_row">
                    <h4 className="Footer_head">Download Our App</h4>
                    <img src="https://www.bbassets.com/static/v2627/custPage/build/content/img/Google-App-store-icon.png" alt="Playstore" />
                    <img src="https://www.bbassets.com/static/v2627/custPage/build/content/img/Apple-App-store-icon.png" alt="Playstore" />

                </div>
                <div className="Each_row">
                    <h4 className="Footer_head">Get Social With Us</h4>
                    <div className="Social_logo_div" >
                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="Social_logo" />
                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="Social_logo" />
                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-icon-circle-png-logo-8.png" alt="Social_logo" />
                        <img src="https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png" alt="Social_logo" />
                    </div>
                </div>
            </div>
            <div className="Footer_detail">
                <div className="EachDetail">
                    <div className="H5_deatail">
                        <h5></h5>
                    </div>
                    <div className="p_deatail">
                        <p></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export { Footer }