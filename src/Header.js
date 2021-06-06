import React from 'react'
import logo from './Logo/logo2.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './style/Header.css'
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const handleAuthencation = () => {
        if (user) {
            auth.signOut();

        }
    }

    const [{ basket,user }, dispatch] = useStateValue();

    return (
        <div className="header">
            
            <Link to="/">
                 <img className="header_logo" src={logo} />  
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>


            
            <div  className="header_nav" >
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthencation} className="header_option">
                        <span className="header_optionLineOne">{!user?'Guest':user.email}</span>
                        <span className="header_optionLineTwo">{ user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>    

                <div className="header_option">
                       
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                  
                </div>

                <div className="header_option">
                    
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>

                </div>

                <Link to ="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineOne header_basketCount">{ basket?.length}</span>

                    </div>
                </Link>
                
            </div>

        </div> 
    )
}

export default Header
