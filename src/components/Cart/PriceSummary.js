import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Heading2 } from "../Heading";

const SummaryContainer = styled.div`
  margin-top: 40px;
  padding: 30px;
  background-color: rgb(245, 245, 245);
`;

const ActionsContainer = styled.div`
  margin: 40px auto 0px;
  text-align: center;
`;

const SummaryList = styled.ul`
  padding: 0px;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const SummaryListItem = styled.li`
  margin: -0.25em 0px;
  padding: 0px;
  list-style-type: none;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryListItemText = styled.div`
  box-sizing: border-box;
`;

const SummaryListItemNum = styled.div`
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 18px;
  display: inline-block;

  span {
    font-size: 14px;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
    display: inline-block;
    margin-left: 4px;
    font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', Meiryo,
      メイリオ, '游ゴシック Medium', 'Yu Gothic Medium', 游ゴシック体,
      'Yu Gothic', YuGothic, 'MS PGothic', Osaka, arial, sans-serif;
  }
`;

const SummaryTipsContainer = styled.div`
  border-top: none;
  margin-top: 30px;
`;

const SummaryTips = styled.div`
  display: table;
  font-size: 14px;
  line-height: 1.5;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
  color: rgb(109, 109, 114);

  span {
    display: table-cell;
  }
`;

const ContinueBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContinueBtn = styled(Button)`
  padding: 16px;
  font-size: 18px;
  max-width: 370px;
  line-height: 1.5;
  font-weight: bold;
  background-color: rgb(60, 60, 67);
  transition: opacity 0.3s ease 0s, color 0.3s ease 0s,
    background-color 0.3s ease 0s;
  width: 100%;
  text-align: center;
  height: auto;
  border: none;
  color: rgb(255, 255, 255);
  border-radius: 4px;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    height: auto;
    border: none;
    max-width: 370px;
    font-size: 18px;
  }
`;

const Tips = styled.div`
  font-size: 14px;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-bottom: -0.25em;
  margin-top: 15px;
`;

const ContinueToShopBtn = styled(Link)`
  margin-top: 15px;
  border: 0px;
  background-color: transparent;
  text-transform: none;
  appearance: none;
  outline: 0px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  transition: opacity 0.3s ease 0s, color 0.3s ease 0s;
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-all;
  display: inline-block;
`;

export const PriceSummary = () => {
  return (
    <>
      <SummaryContainer>
        <Heading2>お支払い金額</Heading2>

        <SummaryList>
          <SummaryListItem>
            <SummaryListItemText>
              <span>商品小計 3点</span>
            </SummaryListItemText>
            <SummaryListItemNum>
              8,970<span>円</span>
            </SummaryListItemNum>
          </SummaryListItem>
        </SummaryList>

        <SummaryTipsContainer>
          <SummaryTips>
            <span className='star'>※</span>
            <span>
              未ログイン状態では配送料、付帯サービス料が表示されません。
            </span>
          </SummaryTips>
        </SummaryTipsContainer>
      </SummaryContainer>

      <ActionsContainer>
        <ContinueBtnWrapper>
          <ContinueBtn reverse='true' type='button'>
            <span>次に進む</span>
          </ContinueBtn>
        </ContinueBtnWrapper>
        <Tips>
          <span>次に進むと、30分間在庫が確保されます。</span>
        </Tips>
        <ContinueToShopBtn to='/'>
          <span>ショッピングを続ける</span>
        </ContinueToShopBtn>
      </ActionsContainer>
    </>
  );
};
