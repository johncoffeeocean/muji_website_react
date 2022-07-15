import React from "react";

import { PcHeader } from "./PcHeader";
import { MobileHeader } from "./MobileHeader";

import "./Header.css";

export const Header = () => {
  return (
    <div className='headers'>
      <PcHeader />
      <MobileHeader />
    </div>
  );
};
