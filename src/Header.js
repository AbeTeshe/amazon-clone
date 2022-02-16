import './header.css';
import { useState } from 'react';
import {Search,  ShoppingCart} from "@mui/icons-material";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Backdrop from './Backdrop';

const Header = () => {
    const [{basket, user}] = useStateValue();
    const [open, setOpen] = useState(false);

    const handleAuthentication =() => {
        if(user) {
            auth.signOut();
        }
    }

  return <div>
        <Backdrop open = {open} onClose ={() => setOpen(false)}/>
        <div className="header">
        <div className='header__top'>
            <Link to="/">
                <img  
                    className="header__logo" alt="logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <Search className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <Link to={!user && "/login"}>
                        <div onClick={handleAuthentication} className='header__option'>
                            <span className='header__optionLineOne'>
                                Hello {!user ? 'Guest' : user.email}
                            </span>
                            <span className='header__optionLineTwo'>
                                {user? 'Sign Out' : 'Sign In'}
                            </span>
                        </div>
                </Link>
                <Link to="/orders">
                    <div className='header__option'>
                            <span className='header__optionLineOne'>
                                Returns
                            </span>
                            <span className='header__optionLineTwo'>
                                & Orders
                            </span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                            Your
                        </span>
                        <span className='header__optionLineTwo'>
                            Prime
                        </span>
                </div>
                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingCart />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='header__bottom'>
            <div className='headerBottom__option'>
                <div onClick={() => setOpen(true)} className='header__backdrop'>
                    <div className="navbar__icon"></div>
                    <div>All</div>
                </div>
            </div>
            <div className='headerBottom__option'>
                <span>Today's Deals</span>
            </div>
            <div className='headerBottom__option'>
                <span>Buy Again</span>
            </div>
            <div className='headerBottom__option'>
                <span>Customer Service</span>
            </div>
            <div className='headerBottom__option'>
                <span>Browsing History </span>
            </div>
            <div className='headerBottom__option'>
                <span>Gift Cards</span>
            </div>
            <div className='headerBottom__option'>
                <span>Amazon.com</span>
            </div>
            <div className='headerBottom__option'>
                <span>Registry</span>
            </div>
            <div className='headerBottom__option'>
                <span>Sell</span>
            </div>
        </div>
    </div>
  </div>;
};

export default Header;
