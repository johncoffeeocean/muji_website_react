import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import { Heading1, CartItemList, PriceSummary } from '../components';

const ContentContainer = styled.main`
  box-sizing: border-box;
  display: block;
  max-width: 1384px;
  width: 100%;
  margin: 20px auto 50px;
  padding-left: 64px;
  padding-right: 64px;
`;

const CartContainer = styled(Row)`
  margin-top: 45px;
`;

const TotalQuantityWrapper = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-bottom: -0.25em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const TotalQuantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin-left: 10px;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
`;

export const CartPage = () => {
  return (
    <ContentContainer>
      <Heading1 style={{ marginTop: 45 }}>ショッピングカート</Heading1>

      <CartContainer gutter={50}>
        <Col flex='auto'>
          <TotalQuantityWrapper>
            <span>アイテム数</span>
            <TotalQuantity>2</TotalQuantity>
          </TotalQuantityWrapper>
          <CartItemList />
        </Col>

        <Col flex='500px'>
          <PriceSummary />
        </Col>
      </CartContainer>
    </ContentContainer>
  );
};
