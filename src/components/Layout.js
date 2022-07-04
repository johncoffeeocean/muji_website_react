import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styled from 'styled-components';

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 1384px;
  width: 100%;
  margin: 20px auto 50px;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 20px;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </>
  );
};
