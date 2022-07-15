import React, { useState } from "react";
import styled from "styled-components";
import { Heading3 } from "../Heading";

const VariatonListWrapper = styled.div`
  margin-top: 20px;

  h3 .colorItems-colorName {
    font-weight: 400;
  }
`;

const VariationList = styled.ul`
  width: 100%;
  list-style: none;
  display: -webkit-flex;
  padding: 0px;
  flex-wrap: wrap;
  margin-bottom: -10px;
`;

const VariationListItem = styled.li`
  margin-bottom: 10px;
  margin-right: 12px;

  input {
    display: none;
  }
  input:checked + label {
    border: 1px solid rgb(60, 60, 67);
  }
  label {
    padding: 3px;
    display: block;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
    border: 1px solid rgb(216, 216, 217);
    border-radius: 50%;
    margin: 0px auto;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const VariationListItemStockStatus = styled.span`
  text-align: center;
  display: block;
  margin-bottom: -0.25em;
  margin-top: calc(5px - 0.25em);
  font-size: 10px;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;

  &.inventory-fewness {
    color: rgb(127, 0, 25);
  }
`;

export const Variation = () => {
  const [selectedVariation, setSelectedVarition] = useState("color-015-1");

  const selectVariationHandler = (event) => {
    setSelectedVarition(event.target.value);
  };

  return (
    <div id='area-color'>
      <VariatonListWrapper>
        <Heading3 container={false}>
          <span>カラー : </span>
          <span className='colorItems-colorName'>ベージュ</span>
        </Heading3>
        <VariationList>
          <VariationListItem>
            <input
              type='radio'
              id='color-009-0'
              name='color'
              value='009'
              defaultChecked={selectedVariation === "color-009-0"}
              onChange={selectVariationHandler}
            />
            <label htmlFor='color-009-0'>
              <img
                src='https://www.muji.com/public/media/img/item/4547315172900_99_95.jpg'
                alt='黒'
                title='黒'
              />
            </label>
            <VariationListItemStockStatus>
              <span>在庫あり</span>
            </VariationListItemStockStatus>
          </VariationListItem>
          <VariationListItem>
            <input
              type='radio'
              id='color-015-1'
              name='color'
              value='015'
              defaultChecked={selectedVariation === "color-015-1"}
              onChange={selectVariationHandler}
            />
            <label htmlFor='color-015-1'>
              <img
                src='https://www.muji.com/public/media/img/item/4547315172931_99_95.jpg'
                alt='ベージュ'
                title='ベージュ'
              />
            </label>
            <VariationListItemStockStatus className='inventory-fewness'>
              <span>残りわずか</span>
            </VariationListItemStockStatus>
          </VariationListItem>
        </VariationList>
      </VariatonListWrapper>
    </div>
  );
};
