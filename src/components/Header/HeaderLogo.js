import React from "react";
import { Link } from "react-router-dom";
// import { LogoMuji } from '../../assets/icons';

export const HeaderLogo = () => (
  <div className='header__logo'>
    <Link className='header__logoLink' to='/'>
      <img
        src='https://www.muji.com/jp/ja/store/static/media/logo-muji.d7511bb3.svg'
        alt='無印良品'
        width='128'
        height='20'
      />
    </Link>
  </div>
);
