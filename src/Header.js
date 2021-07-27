import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header(props) {
const[{basket,user},dispatch]=useStateValue();

const handleAuthentication=()=>{
    if(user){
        auth.signOut();
    }
}

 return (
 <div className="header" >
 <Link to="/">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddSDATXZLnVbyA3Gr5T_ER8Q5VrQ2AxkMXWJzC1pAg-AFc0NKY6EZuOwv5lSjWLQTZYopWJwNBWs&usqp=CAU"
 alt="amazon-logo"
 className="header__logo"
 />
 </Link>
 <div className='header__search' >
 <input type="text" className="header__searchInput"></input>

 <SearchIcon className="header__searchIcon"/>
 </div>
 <div className="header__nav">
 <Link to={!user && "/login"}>
 <div onClick={handleAuthentication} className="header__option">
 <span className='header__optionLineOne'>Hello {user?.email.substring(0,user?.email.indexOf('@'))} </span>
 <span className='header__optionLineTwo'>{user ? 'Sign Out':'Sign In'}</span>
 </div>
 </Link>
 <div className="header__option">
 <span className='header__optionLineOne'>Returns</span>
 <span className='header__optionLineTwo'> & Orders</span>

 </div>
 <div className="header__option">
 <span className='header__optionLineOne'>Your</span>
 <span className='header__optionLineTwo'>Prime</span>
 </div>
 <Link to="/checkout">
 <div className="header__optionBasket">
 <ShoppingBasketIcon />
 <span className="header__optionLineTwo
header__basketCount">{basket?.length}</span>

 </div>
 </Link>

 </div>
 </div>
 );
}
export default Header;