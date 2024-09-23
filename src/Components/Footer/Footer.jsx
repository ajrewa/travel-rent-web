import React from 'react'
import "./Footer.css"
import { CiInstagram } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="container-footer">
          <div className="container-footer-block-1">
            <h3 className="logoname">About</h3>
            <p>Experience convenient and affordable transportation with our self-drive car rental services in Indore with Go With Car and drive your way to your next destination with style and comfort with Go With Car Experience convenient and affordable transportation with our self-drive car rental services in Indore with Go With Car and drive your way to your next destination with style and comfort with Go With Car
            Experience convenient and affordable transportation with our self-drive car rental services in In
            </p>
          </div>
            <div className="container-footer-block">
                <h5>Stations & Branches</h5>
                <p href='#'>Indore Cycle Station[33 Anupam Nagar, Indore, MP 452014] ,</p>
                <p href='#'>RideOn Indore [12 MG Road, Indore, MP 452001] ,</p>
                <p href='#'>Pedal Indore Hub [34 Palasia Square, Indore, MP 452018] ,</p>
                <p href='#'>MetroBike Indore [78 Race Course Road, Indore, MP 452003] ,</p>
                <p href='#'>SpinCycle Center [56 Vijay Nagar, Indore, MP 452010] ,</p>
                <p href='#'>VeloCity Rentals [89 Chappan Dukan, Indore, MP 452001] ,</p>
                <p href='#'>EcoRide Indore [22 Saket Nagar, Indore, MP 452018 ] ,</p>
                <p href='#'>Urban Pedal Zone [45 Bhopal Road, Indore, MP 452016] ,</p>
                <p href='#'>BikeSmart Indore [11 Ranjit Hanuman Temple Road, Indore, MP 452002] ,</p>
            </div>
        </div>
        <div className="footer-smallcontainer">
          <div className="footer-smallcontainer-1">
          <div className="social-links">
          <a href="https://www.instagram.com/aj_rewa?igsh=YnMza3piODFkOWlx"><CiInstagram size="30"/></a>
          <a href=""><SlSocialLinkedin size="25"/></a>
          <a href=""><SlSocialGithub size="25"/></a>
          </div>
          <div className="policy">
          <a href=''>Privacy Policy</a>
          <a href=''>Cookie Policy</a>
          <a href=''>Terms of Use</a>
          <a href=''>Cancellation</a>
          <a href=''>Refund & Return Policy</a>
          </div>
          </div>
          <div className="footer-smallcontainer-2">
            <hr />
          </div>
          <div className="footer-smallcontainer-3">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023-2024 ©AJAXtravel. <br />All rights reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default Footer 