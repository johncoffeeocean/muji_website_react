import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartItemSubTotal } from "./CartItemSubTotal";

const CartItemWrapper = styled.div`
  padding-top: 30px;
  border-top: 1px solid rgb(219, 219, 219);
  display: flex;

  &:not(:first-child) {
    margin-top: 30px;
  }
  &:last-child {
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(219, 219, 219);
  }
`;

const ItemInfoWrapper = styled.div`
  margin-left: 30px;
  flex-grow: 1;
`;

const ItemInfo = styled.div`
  margin-top: 5px;
`;

const ItemName = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: -0.25em;
  margin-bottom: -0.25em;

  &:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  &:active,
  &:hover {
    outline: 0;
  }
`;

const ItemOptions = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
`;

const ItemPriceWrapper = styled.div`
  margin-top: 10px;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
`;

const ItemPriceNum = styled.span`
  font-size: 18px;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
`;

const ItemPriceUnit = styled.span`
  display: inline-block;
  margin-left: 4px;
`;

export const CartItem = ({ itemData }) => {
  const [quantity, setQuantity] = useState(1);
  // const [subTotal, setSubTotal] = useState(0);

  const increaseQuantityHandler = () => {
    if (quantity === 20) {
      return;
    }
    setQuantity((currState) => currState + 1);
  };

  const decreaseQuantityHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((currState) => currState - 1);
  };

  return (
    <CartItemWrapper>
      <Link to='/detail/4550344949986'>
        <span>
          <img
            src={itemData.item.summary.damImage}
            alt=''
            width='150'
            height='150'
            loading='lazy'
          />
        </span>
      </Link>
      <ItemInfoWrapper>
        <div>
          <ItemName to={`/detail/${itemData.item.janCode}`}>
            {itemData.item.summary.skuName}
          </ItemName>
          <ItemInfo>
            <ItemOptions>{itemData.item.summary.itemStandardName}</ItemOptions>
            <ItemPriceWrapper>
              <ItemPrice>
                <ItemPriceNum>{itemData.item.salesPrice}</ItemPriceNum>
                <ItemPriceUnit>円 / 点</ItemPriceUnit>
              </ItemPrice>
              <CartItemSubTotal
                quantity={quantity}
                onIncreaseQuantity={increaseQuantityHandler}
                onDecreaseQuantity={decreaseQuantityHandler}
              />
            </ItemPriceWrapper>
          </ItemInfo>
        </div>
      </ItemInfoWrapper>
    </CartItemWrapper>
  );
};
