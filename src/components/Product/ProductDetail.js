import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { InfoColumn } from "./InfoColumn";
import { PictureColumn } from "./PictureColumn";
import { product } from "../../data";

const RowWrapper = styled(Row)`
  @media (min-width: 992px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

export const ProductDetail = () => {
  return (
    <RowWrapper>
      <PictureColumn pictureData={product.itemImages} itemName={product.itemName}/>
      <InfoColumn productData={product} />
    </RowWrapper>
  );
};
