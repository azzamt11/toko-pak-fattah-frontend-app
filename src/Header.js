import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header" id= "header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://previews.dropbox.com/p/thumb/ABpiKij-YD2YGfYwKZ_sXWZ2F7Gxjt-_5D-mU2T-w3LozCjLXlYbyoTHRU1aYXWpFnhCIf3mW1ddtv7V2KC_JoVjxG14OUtkjbzI0xl3lsGXGSZm1cxDtKCbJCKzfGihMkItLhFq3Ci4gTSQFZHC8yn5HTVG9jJkjei8jQVqMINCuptwoR58N22PWYwNxGPErAksB7JMo2ccqA2owGzQdMLD3eRJZq2trwbqXGpLdIF8TVGEN5zuDocLDuNzLwIF0KxSMFGF2xKjNs8Ryc1cVJk51c1KAg_DecSqXyaM9PkJY0Zd_rMWe3VAbHzFD6Z_XZjd6aVIEDabj5aHAD9QkWG4-xoJUlpVMPV-keyaur_YJ5Qk7hBnBArinwhVghiEByE/p.png"
        />
      </Link>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hallo {!user ? 'Pengunjung' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Keluar' : 'Masuk'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Pesanan</span>
            <span className="header__optionLineTwo">& Pembayaran</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
