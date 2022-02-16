import React, {useState} from 'react';
import {Clear} from "@mui/icons-material";
import ReactDom from 'react-dom';
import {Person, ArrowForwardIos, KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import "./backdrop.css";

const Backdrop = ({open, onClose}) => {
    const [showShop, setShowShop] = useState(false);

    
 if(!open) return null;
  return ReactDom.createPortal(
    <>  
        <div className='overlay' onClick={onClose}></div>
        <div className="backdrop">
                <div className='backdrop__header'>
                    <Person className='person__icon' />
                    <h1>Hello, Abebe</h1>
                    <Clear onClick={onClose} fontSize="large" className='close__button'/>
                </div>
                <div className='categories'>
                    <h3><span>Digital Content & Devices</span> </h3>
                    <p><a href="#">Amazon Music <ArrowForwardIos fontSize="small" className='arrow__icon' /></a>
                    <div></div>
                    </p>
                    <p><a href="#">Kindle E-readers & Books <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">Appstore for Android <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <h3><span>Shop By Department</span> </h3>
                    <p><a href="#">Electronics <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">Computers <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">Smart Home <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">Arts and Crafts <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    {showShop &&(
                        <>
                            <p><a href="#">Automotive <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Baby <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Beaty and personal care <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Women's Fashion<ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Men's Fashion<ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Girls' Fashion <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Boys' Fashion <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                            <p><a href="#">Health and Household <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                        </>
                    )}
                    <p onClick={e => setShowShop(!showShop)}><span>See {!showShop ? 'More': 'Less'}{showShop ? <KeyboardArrowDown fontSize='small'/> : <KeyboardArrowUp fontSize='small'/>}</span> </p>

                    <h3><span>Programs and Features</span> </h3>
                    <p><a href="#">Gift Cards <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">#FoundItOnAmazon <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">Amazon Live<ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">International Shopping <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <p><a href="#">Amazon Second Chance <ArrowForwardIos fontSize="small" className='arrow__icon' /></a></p>
                    <h3><span>Help & Settings</span> </h3>
                    <p><a href="#">Your Account</a></p>
                    <p><a href="#">English</a></p>
                    <p><a href="#">Amazon Music</a></p>
                    <p><a href="#">Customer Service</a></p>
                    <p><a href="#">Sign Out</a></p>
                </div>
        </div>
    </>,
    document.getElementById("portal")
  )
}

export default Backdrop;