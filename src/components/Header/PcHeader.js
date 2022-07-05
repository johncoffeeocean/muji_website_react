import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TopHeader } from './TopHeader';
import { HeaderDropMenu } from './HeaderDropMenu';
import { HeaderTools } from './HeaderTools';
import { HeaderSearch } from './HeaderSearch';

const PcHeaderContainer = styled.header`
  display: none;
  height: 119px;

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
  const [fixMode, setFixMode] = useState('top');

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      if (scrollY === 0) {
        // top
        setFixMode('top');
      } else if (scrollY > lastScrollY) {
        // down
        if ((scrollY > 0) & (scrollY < 70)) {
          setFixMode('wait');
        } else {
          setFixMode('down');
        }
      } else {
        // up
        setFixMode('up');
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const scrollEvent = window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    });

    return () => {
      window.document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <PcHeaderContainer className='header__container pc-header'>
      <div className='header__inner' data-fixmode={fixMode}>
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
