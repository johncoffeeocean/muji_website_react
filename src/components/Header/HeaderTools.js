import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartTmb = styled.span`
  &::before {
    display: block;
    position: absolute;
    width: 100%;
    content: '0';
    border-radius: 10px;
    color: rgb(60, 60, 67);
    font-size: 15px;
    line-height: 1;
    text-align: center;
    top: 10px;
    left: 0px;
    margin-left: 1.5px;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: bold;
  }
`;

const LoginBtn = () => {
  return (
    <div
      id='LoginIcon'
      className='header__tool header__tool--login'
      style={{ cursor: "pointer", height: "100%" }}
    >
      <div
        className='header__toolBtn'
        id='user'
        role='button'
        tabIndex='0'
        aria-label='ログインメニューを開く'
      >
        <span className='header__toolTmb'>
          <img
            src='https://www.muji.com/jp/ja/store/static/media/icon_person.288c9248.svg'
            width='24'
            height='24'
            alt=''
            className='header__toolImg'
          />
        </span>
        <span className='header__toolTxt'>
          <span>ログイン</span>
        </span>
      </div>
    </div>
  );
};

const CartBtn = () => {
  return (
    <div className='header__tool header__tool--cart'>
      <Link className='header__toolBtn' to='/cart'>
        <div
          className='header__toolBtn'
          role='button'
          tabIndex='0'
          aria-label='サポートメニューを開く'
        >
          <CartTmb className='header__toolTmb'>
            <img
              className='header__toolImg'
              src='https://www.muji.com/jp/ja/store/static/media/icon_cart_badge.bb876403.svg'
              width='24'
              height='24'
              alt=''
            />
          </CartTmb>
          <div className='header__toolTxt'>
            <span>カート</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const SupportBtn = () => {
  return (
    <div
      id='SupportIcon'
      className='header__tool header__tool--support'
      style={{ cursor: "pointer", height: "100%" }}
    >
      <div
        className='header__toolBtn'
        role='button'
        tabIndex='0'
        aria-label='サポートメニューを開く'
      >
        <span className='header__toolTmb'>
          <img
            src='https://www.muji.com/jp/ja/store/static/media/icon_support.34b0dda0.svg'
            width='24'
            height='24'
            alt=''
            className='header__toolImg'
          />
        </span>
        <div className='header__toolTxt'>
          <span>サポート</span>
        </div>
      </div>
    </div>
  );
};

export const HeaderTools = () => {
  return (
    <div className='header__tools'>
      <LoginBtn />
      <CartBtn />
      <SupportBtn />
    </div>
  );
};
