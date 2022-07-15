import React from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";

const CartItemListWrapper = styled.div`
  margin-top: 17px;
`;

export const CartItemList = ({ items=[] }) => {
  return (
    <CartItemListWrapper>
      {items.map((itemData, index) => (
        <CartItem itemData={itemData} key={`cart-${index}`} />
      ))}
    </CartItemListWrapper>
  );
};
