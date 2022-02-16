import React from 'react'
import "./footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

  return (
    <div className='footer'>
        <div onClick={scrollToTop} className="backToTop">
            <p>Back to Top</p>
        </div>
        <div className='footer__container'>
            <div className='footer__links'>
                <h4 className='footerLink__title'>Get to Know Us</h4>
                <p>
                    <a href=''>Careers</a>
                </p>
                <p>
                    <a href=''>Blog</a>
                </p>
                <p>
                    <a href=''>About Amazon</a>
                </p>
                <p>
                    <a href=''>Investor Relations</a>
                </p>
                <p>
                    <a href=''>Amazon Devices</a>
                </p>
                <p>
                    <a href=''>Amazon Science</a>
                </p>
            </div>
            <div className='footer__links'>
                <h4 className='footerLink__title'>Make Money with Us</h4>
                <p>
                    <a href=''>Sell Products on Amazon</a>
                </p>
                <p>
                    <a href=''>Sell on Amazon Business</a>
                </p>
                <p>
                    <a href=''>Sell apps on Amazon</a>
                </p>
                <p>
                    <a href=''>Become an Affiliate</a>
                </p>
                <p>
                    <a href=''>Advertise Your Products</a>
                </p>
                <p>
                    <a href=''>Self-Publish with Us</a>
                </p>
                <p>
                    <a href=''>Host an Amazon Hub</a>
                </p>
                <p>
                    <a href=''>See More Make Money with Us</a>
                </p>
            </div>
            <div className='footer__links'>
                <h4 className='footerLink__title'>Amazon Payment Products</h4>
                <p>
                    <a href=''>Amazon Business Card</a>
                </p>
                <p>
                    <a href=''>Shop with Points</a>
                </p>
                <p>
                    <a href=''>Reload Your Balance</a>
                </p>
                <p>
                    <a href=''>Amazon Currency Convertor</a>
                </p>
               
            </div>
            <div className='footer__links'>
                <h4 className='footerLink__title'>Let Us Help You</h4>
                <p>
                    <a href=''>Amazon and COVID-19</a>
                </p>
                <p>
                    <a href=''>Your Account</a>
                </p>
                <p>
                    <a href=''>Your Orders</a>
                </p>
                <p>
                    <a href=''>Shipping Rates and Policies</a>
                </p>
                <p>
                    <a href=''>REturns and Replacements</a>
                </p>
                <p>
                    <a href=''>Manage Your Content and Devices</a>
                </p>
                <p>
                    <a href=''>Amazon Assistant</a>
                </p>
                <p>
                    <a href=''>Help</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer