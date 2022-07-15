import React, { useEffect } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import { cartData } from "../data";
import { CartItemList, Heading1, PriceSummary } from "../components";

const ContentContainer = styled.div`
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

const NoItemFound = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartPage = () => {
  useEffect(() => {
    document.title = "ショッピングカート｜無印良品";
  }, []);

  return (
    <ContentContainer>
      <Heading1 style={{ marginTop: 45 }}>ショッピングカート</Heading1>
      {cartData.length ? (
        <CartContainer gutter={50}>
          <Col flex='auto'>
            <TotalQuantityWrapper>
              <span>アイテム数</span>
              <TotalQuantity>2</TotalQuantity>
            </TotalQuantityWrapper>
            <CartItemList items={cartData} />
          </Col>

          <Col flex='500px'>
            <PriceSummary />
          </Col>
        </CartContainer>
      ) : (
        <NoItemFound>ショッピングカートの中に商品がございません。</NoItemFound>
      )}
    </ContentContainer>
  );
};
