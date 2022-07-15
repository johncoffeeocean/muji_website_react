import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Col } from "antd";
import { VscHeart as HeartIcon } from "react-icons/vsc";

import { Price } from "./Price";
import { Info } from "./Info";
import { Delivery } from "./Delivery";
import { Variation } from "./Variation";
import { Size } from "./Size";
import { Quantity } from "./Quantity";

const ColWrapper = styled(Col)`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }

  @media (min-width: 992px) {
    padding-top: 0px;
  }
`;

const StickyWrapper = styled.div`
  @media (min-width: 768px) {
    position: sticky;
    top: ${(props) => props.topSticky}px;
  }
  @media (max-width: 768px) {
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`;

const Title = styled.div`
  display: flex;
  margin-right: auto;

  h1 {
    font-size: 26px;
    margin-top: -0.25em;
    color: rgb(60, 60, 67);
    margin-bottom: calc(30px - 0.25em);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const SubTitle = styled.p`
  font-size: 14px;
  margin-top: -0.25em;
  color: rgb(60, 60, 67);
  margin-bottom: calc(40px - 0.25em);

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const AddWishListBtn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 20px;

  button {
    position: relative;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid rgb(157, 157, 160);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button span {
    transform: translateY(1px);
  }
`;

const SaleTag = styled.div`
  margin: 10px 10px 10px 0px;
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
    color: rgb(60, 60, 67);
    width: fit-content;
    text-align: center;
    margin-right: 30px;
    white-space: nowrap;
  }
`;

const PrimaryButton = styled.button`
  display: inline-block;
  width: 100%;
  font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', Meiryo,
    メイリオ, '游ゴシック Medium', 'Yu Gothic Medium', 游ゴシック体, 'Yu Gothic',
    YuGothic, 'MS PGothic', Osaka, arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  background-color: rgb(60, 60, 67);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 1.125em 1em;

  &:hover {
    background-color: rgb(0, 0, 0);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 0.9167em 0px;
    transition: background-color 0.3s ease 0s;
  }
`;

const IconButton = styled.button`
  display: inline-block;
  width: 100%;
  font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', Meiryo,
    メイリオ, '游ゴシック Medium', 'Yu Gothic Medium', 游ゴシック体, 'Yu Gothic',
    YuGothic, 'MS PGothic', Osaka, arial, sans-serif;
  line-height: 1.5;
  cursor: pointer;
  padding: 1.125em 1em;
  max-width: 100%;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  background-color: rgb(255, 255, 255);
  color: rgb(60, 60, 67);
  margin-top: 20px;
  border: 1px solid rgb(216, 216, 217);
  border-radius: 4px;
  min-width: 212px;
  box-shadow: rgb(88 88 88 / 30%) 0px 0px 0px;

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 0.9167em 0px;
    transition: background-color 0.3s ease 0s;
  }
`;

const IconButtonInner = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IconWrapper = styled.div`
  width: ${(props) => props.size ?? 25}px;
  height: ${(props) => props.size ?? 25}px;
  margin-right: 5px;
`;

const ItemActionWrapper = styled.div`
  margin-top: 40px;
`;

export const InfoColumn = ({ productData }) => {
  const [stickyOffset, setStickyOffset] = useState();
  const columnRef = createRef();
  const oldPricesLen = productData.price.oldPrices?.length ?? undefined;
  const btnIconSize = 25;

  useEffect(() => {
    const { current } = columnRef;

    if (current) {
      const topOffset = current.getBoundingClientRect().top;
      const bottomOffset = current.getBoundingClientRect().bottom;

      setStickyOffset(topOffset + window.innerHeight - bottomOffset);
    }
  }, [columnRef]);

  return (
    <ColWrapper className='infoCol' lg={8} xs={24} offset={2}>
      <StickyWrapper
        style={{ width: "100%" }}
        topSticky={stickyOffset}
        ref={columnRef}
      >
        <div id='area-title' style={{ display: "flex" }}>
          <Title>
            <h1>{productData.itemName}</h1>
          </Title>
          <AddWishListBtn>
            <button>
              <HeartIcon style={{ fontSize: "24px", color: "#9d9da0" }} />
            </button>
          </AddWishListBtn>
        </div>
        <div id='area-subtitle'>
          <SubTitle>男女兼用Ｌ～ＸＬ・ベージュ</SubTitle>
        </div>
        <div id='area-price'>
          {oldPricesLen && (
            <SaleTag>
              <span>SALE</span>
            </SaleTag>
          )}

          <div
            className='pictureCol'
            style={{
              maxWidth: 670,
              display: "none",
              marginLeft: "-5.333vw",
              marginRight: "-5.333vw",
              position: "relative",
            }}
          ></div>

          <Price productPrice={productData.price} />
        </div>

        <Info productData={productData} />

        <Variation />

        <Size />

        <Quantity min={1} max={20} />

        <ItemActionWrapper>
          <div id='area-cart'>
            <PrimaryButton id='products_cart' color='#7f0019'>
              <span>カートに入れる</span>
            </PrimaryButton>
          </div>
          <div id='area-favorite'>
            <IconButton id='products_fav'>
              <IconButtonInner>
                <IconWrapper size={btnIconSize}>
                  <HeartIcon size={btnIconSize} />
                </IconWrapper>
                <span>お気に入りに追加する</span>
              </IconButtonInner>
            </IconButton>
          </div>
          <div id='area-store'>
            <IconButton id='products_shop_stock'>
              <IconButtonInner>
                <IconWrapper size={btnIconSize}>
                  <svg id='icon_shop' viewBox='0 0 25 25'>
                    <g>
                      <path
                        fill='currentColor'
                        d='M 22.74 5 H 2.26 a 0.75 0.75 0 0 0 -0.75 0.75 V 20.3 a 0.74 0.74 0 0 0 0.75 0.75 H 22.74 a 0.74 0.74 0 0 0 0.75 -0.75 V 5.73 A 0.75 0.75 0 0 0 22.74 5 Z M 22 6.48 V 8.1 H 3 V 6.48 Z M 11.75 19.55 H 9 V 13.69 h 2.79 Z m 4.29 0 H 13.25 V 13.69 H 16 Z m 1.5 0 V 12.94 a 0.75 0.75 0 0 0 -0.75 -0.75 H 8.21 a 0.75 0.75 0 0 0 -0.75 0.75 v 6.61 H 3 V 9.6 H 22 v 10 Z'
                      ></path>
                      <rect fill='none' width='25' height='25'></rect>
                    </g>
                  </svg>
                </IconWrapper>
                <span>店舗在庫を確認する</span>
              </IconButtonInner>
            </IconButton>
          </div>
        </ItemActionWrapper>

        <Delivery productData={productData} freeDelivery={5000} />
      </StickyWrapper>
    </ColWrapper>
  );
};
