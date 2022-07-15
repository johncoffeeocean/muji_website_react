import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styled from "styled-components";

const ContentContainer = styled.main`
  width: 100%;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentContainer className='contents'>{children}</ContentContainer>
      <Footer />
    </>
  );
};
