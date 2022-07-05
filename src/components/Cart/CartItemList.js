import React from 'react';
import styled from 'styled-components';
import { CartItem } from './CartItem';

const CartItemListWrapper = styled.div`
  margin-top: 17px;
`;

export const CartItemList = ({ data = [1, 2] }) => {
  return (
    <CartItemListWrapper>
      {data.map((itemData, index) => (
        <CartItem data={itemData} key={`cart-${index}`} />
      ))}
    </CartItemListWrapper>
  );
};
