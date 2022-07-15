import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { InputNumber } from "antd";

const QuantityWrapper = styled.div`
  margin-top: 30px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: rgb(60, 60, 67);
    margin-bottom: calc(15px - 0.25em);
  }
`;

const QuantityActionWrapper = styled.div`
  display: flex;
`;

const QuantityActionBtn = styled.div`
  line-height: 50px;
  width: 50px;
  height: 50px;
  background-color: rgb(216, 216, 217);
  box-shadow: none;
  text-align: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
  color: rgb(60, 60, 67);
  border-radius: 4px;

  &.disabled {
    cursor: default;
    opacity: 0.2;
  }

  svg {
    width: 10px;
    height: 100%;
  }
`;

const QuantityInput = styled.div`
  .ant-input-number {
    transition: all 0.3s ease 0s;
    cursor: pointer;
    align-items: center;
    width: 100%;
    max-width: 72px;
    height: 100%;
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

export const Quantity = ({ min = 1, max = 20 }) => {
  const [quantity, setQuantity] = useState(1);

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

  const changeQuantityHandler = (value) => {
    setQuantity(value);
  };

  return (
    <div id='area-quantity'>
      <QuantityWrapper>
        <h3>
          <span>数量</span>
        </h3>
        <QuantityActionWrapper>
          <QuantityActionBtn
            className={`quantity-decrease ${quantity <= min && "disabled"}`}
            onClick={decreaseQuantityHandler}
          >
            <AiOutlineMinus />
          </QuantityActionBtn>
          <QuantityInput>
            <InputNumber
              min={min}
              max={max}
              controls={false}
              value={quantity}
              onChange={(newValue) => changeQuantityHandler(newValue)}
            />
          </QuantityInput>
          <QuantityActionBtn
            className={`quantity-increase ${quantity >= max && "disabled"}`}
            onClick={increaseQuantityHandler}
          >
            <AiOutlinePlus />
          </QuantityActionBtn>
        </QuantityActionWrapper>
      </QuantityWrapper>
    </div>
  );
};
