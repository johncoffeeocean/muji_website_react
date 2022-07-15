import React from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { InputNumber } from "antd";

const SpaceBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

const QuantityActionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
  -webkit-box-align: center;
`;

const QuantityActionBtn = styled.button`
  padding: 0px;
  margin: 0px;
  outline: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(60, 60, 67);
  font-weight: bold;
  width: 100%;
  max-width: 48px;
  line-height: 46px;
  height: 48px;
  border: 1px solid rgb(60, 60, 67);
  text-align: center;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease 0s, color 0.3s ease 0s,
    background-color 0.3s ease 0s;
  touch-action: manipulation;
  text-transform: none;
  user-select: none;

  &:hover {
    background-color: rgb(245, 245, 245);
  }

  &[disabled] {
    border: 1px solid rgb(219, 219, 219);
  }
  &[disabled]:hover {
    background-color: rgb(255, 255, 255);
  }
`;

const QuantityInput = styled.div`
  .ant-input-number {
    transition: all 0.3s ease 0s;
    cursor: pointer;
    align-items: center;
    width: 100%;
    max-width: 72px;
    height: 48px;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    margin-left: 15px;
    margin-right: 15px;
    justify-content: center;
    display: flex;
    font-size: 20px;
    text-align: center;
    text-transform: none;
  }

  .ant-input-number:hover,
  .ant-input-number:focus,
  .ant-input-number:active,
  .ant-input-number:visited {
    box-shadow: none;
    border-color: rgb(60, 60, 67) !important;
  }

  .ant-input-number-input {
    width: 72px;
    height: 45px;
    line-height: 50px;
    text-align: center;
    border-radius: 0px;
    border-color: rgb(153, 153, 153);
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
  }
`;

const SubTotal = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-bottom: -0.25em;

  .sub-total__price {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
  }

  .sub-total__price__yen {
    display: inline-block;
    margin-left: 4px;
  }
`;

const ClearAllBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;

  button {
    padding: 0px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(60, 60, 67);
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
    border: none;
    display: inline;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: color 0.3s ease 0s;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export const CartItemSubTotal = ({
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
}) => {
  return (
    <SpaceBetweenWrapper>
      <QuantityActionWrapper>
        <QuantityActionBtn
          aria-label='商品数を1つ減らす'
          disabled={quantity <= 1}
          onClick={onDecreaseQuantity}
        >
          <AiOutlineMinus />
        </QuantityActionBtn>
        <QuantityInput>
          <InputNumber min={1} max={20} controls={false} value={quantity} />
        </QuantityInput>
        <QuantityActionBtn
          aria-label='商品数を1つ増やす'
          disabled={quantity >= 20}
          onClick={onIncreaseQuantity}
        >
          <AiOutlinePlus />
        </QuantityActionBtn>
      </QuantityActionWrapper>
      <div className='sc-pZdvY cBuwhn'>
        <SubTotal style={{ color: "rgb(60, 60, 67)" }}>
          <span>小計（消費税込）</span>
          <span className='sub-total__price'>2,980</span>
          <span className='sub-total__price__yen'>
            <span>円</span>
          </span>
        </SubTotal>
        <ClearAllBtn className='sc-qYGWS jnzTeZ'>
          <div>
            <button>
              <span>削除</span>
            </button>
          </div>
        </ClearAllBtn>
      </div>
    </SpaceBetweenWrapper>
  );
};
