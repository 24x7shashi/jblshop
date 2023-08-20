import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
return (
<footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Valuptenm accustiam doloequm , totaa rem aperian , equea 1psa quae ab illp inventore veritatis et quasi archiecho beatae vitae dicta sunt explicabo equa ipsa quse ab lion</div>
            </div>
            <div className="col"><div className="title">Contact</div>
                <div className="c-item">
                   < FaLocationArrow />
                   <div className="text">Kalora rd Punnamada , kottankulranga , Alapuuzha Kerla 6880066
                   </div>
                </div>
                <div className="c-item">
                    < FaMobileAlt />
                    <div className="text">123-456-789
                    </div>
                </div>
                <div className="c-item">
                     < FaEnvelope />
                    <div className="text">care@gmil.com
                    </div>
                </div>
                </div>
            <div className="col">
                <div className="title">Category</div>
                  <span className="text">Mediaphone</span>
                  <span className="text">Smart Watches</span>
                  <span className="text">Blutooth Speaker </span>
                  <span className="text">Wireless Earpod</span>
                  <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                  <span className="text">Home</span>
                  <span className="text">About</span>
                  <span className="text">Privecy Policy </span>
                  <span className="text">Returns</span>
                  <span className="text">Terms & Conditions</span>
                  <span className="text">Contact Us</span>
                </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">JBL 2023 Creadted By sk. Premium Ecommerse Solution
                        </div>
                         <img src={Payment} />
                    </div>
                </div>
        
    </footer>);
};

export default Footer;
