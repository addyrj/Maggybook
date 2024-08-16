import React from 'react'
import "./style.scss"
import demo from "../../assets/1.jpg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="support">
            <h1>24/7 Support</h1>
            <p>1234567890</p>
        </div>
        <div className="footer-menu">
            <ul>
                <Link><li>About Us</li></Link>
                <Link><li className='r'>Rules</li></Link>
                <Link><li className='r'>Term & Conditions</li></Link>
                <Link><li className='r'>Responsible Gaming</li></Link>
                
            </ul>
        </div>
        <div className="footer-sec2">

        <div className="footer-top">
            <h2>100% SAFE</h2>
            <p>Protected connection and encrypted data.</p>
        </div>
        <div className="payment">
            <ul>
                <li>
                    <img src={demo} alt="#image" />
                </li>
                <li>
                    <img src={demo} alt="#image" />
                </li>
                <li>
                    <img src={demo} alt="#image" />
                </li>
                <li>
                    <img src={demo} alt="#image" />
                </li>
            </ul>
        </div>
        </div>
        <div className="footer-maggi"><p>Maggibook.com</p>

        </div>
        <div className="copywrite">Copyright 2020. All Rights Reserved.</div>
    </div>
  )
}

export default Footer