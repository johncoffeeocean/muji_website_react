import React from 'react';

import { PcHeader } from './PcHeader';
import { MobileHeader } from './MobileHeader';

import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <PcHeader />
      <MobileHeader />
    </header>
  );
};
