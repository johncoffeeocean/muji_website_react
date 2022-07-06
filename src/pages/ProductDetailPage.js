import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from '../components/Breadcrumb';
import Detail from '../components/Product/Detail';

const breadcrumbs = [
  {
    path: 'ROOT',
    name: 'ネットストア',
  },
  {
    path: 'D00023',
    name: 'MUJI Labo',
  },
  {
    path: 'S1001302',
    name: 'MUJI Labo | Tシャツ・スウェット',
  },
];

const ContentContainer = styled.main`
  @media (min-width: 768px) {
    padding: 20px 2vw 0px;
  }
  @media screen and (min-width: 1024px) {
    box-sizing: border-box;
    display: block;
    max-width: 1384px;
    width: 100%;
    margin: 20px auto 50px;
    padding: 20px 64px 0px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 15px auto;
  font-size: 14px;
  line-height: 1.5;
  color: rgb(88, 88, 88);
  box-sizing: border-box;
  display: block;

  @media (max-width: 1600px) {
    padding: 0px 30px;
  }
`;

export const ProductDetailPage = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <Breadcrumb links={breadcrumbs} />
        <Detail />
      </ContentWrapper>
    </ContentContainer>
  );
};
