import React, { useEffect } from "react";
import styled from "styled-components";

import { Breadcrumb, ProductDetail } from "../components";
import { product } from "../data/product";

const ContentContainer = styled.div`
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

const ProductDetailWrapper = styled.div`
  margin-top: 15px;
`;

export const ProductDetailPage = () => {
  useEffect(() => {
    document.title = `${product.itemName} ${product.itemStandardName} | ${product.sectionTag} | 無印良品`;
  }, []);

  return (
    <ContentContainer>
      <ContentWrapper>
        <Breadcrumb links={product.links[0].normal} />

        <ProductDetailWrapper>
          <ProductDetail />
        </ProductDetailWrapper>
      </ContentWrapper>
    </ContentContainer>
  );
};
