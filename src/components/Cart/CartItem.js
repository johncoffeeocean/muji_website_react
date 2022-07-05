import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`

const ItemName = styled(Link)`
font-size: 18px;
    font-weight: bold;
    color: rgb(60, 60, 67);
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
`

const ItemOptions = styled.p`
font-size: 14px;
    font-weight: 400;
    color: rgb(60, 60, 67);
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
`

const ItemPriceWrapper = styled.div`
    margin-top: 10px;
`

const ItemPrice = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: rgb(60, 60, 67);
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
`

const ItemPriceNum = styled.span`
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
`

const ItemPriceUnit = styled.span`
display: inline-block;
    margin-left: 4px;
`

export const CartItem = () => {
  return (
    <CartItemWrapper>
      <Link className='sc-jMWPSv fiAuOD' to='/detail/4550344949986'>
        <span className='sc-kIhKUI gNPWvH'>
          <img
            src='https://www.muji.com/public/media/img/item/4550344949986_400.jpg'
            alt=''
            width='150'
            height='150'
            loading='lazy'
          />
        </span>
      </Link>
      <ItemInfoWrapper>
        <div>
          <ItemName to='/detail/4550344949986'>
            軽量　晴雨兼用　折りたたみ傘
          </ItemName>
          <ItemInfo>
            <ItemOptions>５０ｃｍ・５本骨・黒チェック</ItemOptions>
            <ItemPriceWrapper>
              <ItemPrice>
                <ItemPriceNum>1,490</ItemPriceNum>
                <ItemPriceUnit>円 / 点</ItemPriceUnit>
              </ItemPrice>
            </ItemPriceWrapper>
          </ItemInfo>
        </div>
      </ItemInfoWrapper>
    </CartItemWrapper>
  );
};
