import React from "react";
import styled from "styled-components";

const MobileHeaderContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileHeader = () => {
  return (
    <MobileHeaderContainer className='mobileHeader'>
      {/* <img src="/" alt="" /> */}
      <div>okela</div>
    </MobileHeaderContainer>
  );
};
