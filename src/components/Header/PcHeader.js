import React from 'react';
import styled from 'styled-components';

import { TopHeader } from './TopHeader';
import { HeaderDropMenu } from './HeaderDropMenu';
import { HeaderTools } from './HeaderTools';
import { HeaderSearch } from './HeaderSearch';

const PcHeaderContainer = styled.header`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const HeaderLogo = () => (
  <div className='header__logo'>
    <a className='header__logoLink' href='/'>
      <img
        src='https://www.muji.com/jp/ja/store/static/media/logo-muji.d7511bb3.svg'
        alt='無印良品'
        width='128'
        height='20'
      />
    </a>
  </div>
);

export const PcHeader = () => {
  return (
    <PcHeaderContainer className='header__container pc-header'>
      <div className='header__inner' style={{ height: 119 }}>
        <TopHeader />

        <div className='header__nav'>
          <HeaderLogo />
          <HeaderDropMenu />
          <HeaderSearch />
          <HeaderTools />
        </div>
      </div>
    </PcHeaderContainer>
  );
};
