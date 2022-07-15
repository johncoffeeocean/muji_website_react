import React, { useState } from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import { Specification } from "./Specification";
import { SizeChart } from "./SizeChart";

const InfoWrapper = styled.div`
  margin-top: 30px;

  @media screen and (min-width: 1024px) {
    margin-top: 40px;
  }

  .ant-tabs-nav-container {
    margin-bottom: 0px;
  }
  .ant-tabs-nav {
    width: 100%;
  }
  .ant-tabs-nav-list {
    flex: 1;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    border-bottom: 3px solid rgb(60, 60, 67);
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab-active .ant-tabs-tab-btn:hover,
  .ant-tabs-tab-active .ant-tabs-tab-btn:active,
  .ant-tabs-tab-active .ant-tabs-tab-btn:focus {
    color: rgb(60, 60, 67);
  }
  .ant-tabs-nav .ant-tabs-ink-bar {
    display: none !important;
  }
  .ant-tabs-nav .ant-tabs-tab {
    justify-content: center;
    margin: 0;
    width: 50%;
    height: 47px;
    box-sizing: border-box;
    transition: border-color 0.3s ease 0s;
  }
  .ant-tabs-nav .ant-tabs-tab div {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: rgb(60, 60, 67);
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: rgb(0, 0, 0);
    border-bottom: 3px solid rgb(60, 60, 67);
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 14px;

  span {
    white-space: pre-wrap;
  }

  @media screen and (min-width: 1024px) {
    .productData__receivingMeans {
      align-items: baseline;
      margin-top: 20px;
    }
    .productData__receive {
      align-items: center;
    }
    .productData__item {
      display: flex;
      align-items: center;
    }
    .productData__item:not(:first-child) {
      margin-top: 20px;
    }
    .productData__dttl {
      font-size: 14px;
      font-weight: bold;
      color: rgb(60, 60, 67);
      line-height: 1;
    }
    .productData__data,
    .productData__cold {
      font-size: 14px;
      font-weight: 400;
      color: rgb(60, 60, 67);
      line-height: 1;
      margin-left: 15px;
      margin-bottom: 0px;
      padding-right: 5px;
      display: inline-block;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  height: auto;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  font-size: 16px;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
`;

const ExtraInfoWrapper = styled.div`
  max-height: 0px;
  margin-top: 0px;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease 0s;

  &.display {
    max-height: fit-content;
    margin-top: 35px;
    opacity: 1;
    overflow: visible;
  }
`;

const SeeMoreBtn = styled.div`
  border-bottom: none;
  text-align: right;

  .seeMore {
    display: inline-block;
    cursor: pointer;
    padding: 35px 0px calc(22px - 0.25em);
    font-size: 14px;
    font-weight: bold;
    color: rgb(60, 60, 67);
    transition: color 0.3s ease 0s;
  }

  .seeMore span {
    margin-right: 15px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .seeMore span::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-left: 15px;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%3E%20%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22none%22%2F%3E%20%3Cg%20transform%3D%22translate(-13.712%20-14.428)%22%3E%20%3Cpath%20d%3D%22M17158.711%2C17720.178v-3.252h-3.252a.749.749%2C0%2C0%2C1%2C0-1.5h3.252v-3.252a.749.749%2C0%2C0%2C1%2C1.5%2C0v3.252h3.252a.749.749%2C0%2C1%2C1%2C0%2C1.5h-3.252v3.252a.749.749%2C0%2C1%2C1-1.5%2C0Z%22%20transform%3D%22translate(-17140.75%20-17696.75)%22%20fill%3D%22%233c3c43%22%2F%3E%20%3C%2Fg%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const CloseSeeMoreBtn = styled.div`
  border-bottom: 1px solid rgb(216, 216, 217);
  text-align: right;

  .closeSeeMore {
    display: inline-block;
    cursor: pointer;
    padding: 35px 0px calc(22px - 0.25em);
    font-size: 14px;
    font-weight: bold;
    color: rgb(60, 60, 67);
    transition: color 0.3s ease 0s;
  }

  .closeSeeMore span {
    margin-right: 15px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .closeSeeMore span::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-left: 15px;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%3E%20%3Cpath%20d%3D%22M8%2C.75H0A.75.75%2C0%2C0%2C1-.75%2C0%2C.75.75%2C0%2C0%2C1%2C0-.75H8A.75.75%2C0%2C0%2C1%2C8.75%2C0%2C.75.75%2C0%2C0%2C1%2C8%2C.75Z%22%20transform%3D%22translate(1%205)%22%20fill%3D%22%233c3c43%22%2F%3E%20%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const Info = ({ productData }) => {
  const [isSeeMore, setIsSeeMore] = useState(true);

  const seeMoreButtonHandler = () => {
    setIsSeeMore((currState) => !currState);
  };

  return (
    <div id='area-info'>
      <InfoWrapper>
        <Tabs>
          <Tabs.TabPane tab='商品説明' key='tab-1'>
            <DescriptionWrapper>
              <Description>
                <span>{productData.webCatalogDescription}</span>
              </Description>
              {isSeeMore ? (
                <>
                  <ExtraInfoWrapper className={isSeeMore && "display"}>
                    <dl className='productData__list'>
                      <div className='productData__item productData__receivingMeans'>
                        <dt className='productData__dttl'>
                          <span>受取手段</span>
                        </dt>
                        <div className='productData__receive'>
                          <dd className='productData__data'>
                            店舗受け取り可・コンビニ受け取り可
                          </dd>
                        </div>
                      </div>
                      <div className='productData__item'>
                        <dt className='productData__dttl'>
                          <span>支払手段</span>
                        </dt>
                        <dd className='productData__data'>d払い可</dd>
                      </div>
                      <div className='productData__item'>
                        <dt className='productData__dttl'>
                          <span>配送区分</span>
                        </dt>
                        <dd className='productData__data'>宅配品</dd>
                      </div>
                      <div className='productData__item'>
                        <dt className='productData__dttl'>
                          <span>商品番号</span>
                        </dt>
                        <dd className='productData__data productData__number'>
                          15172900
                        </dd>
                      </div>
                    </dl>
                  </ExtraInfoWrapper>
                  <CloseSeeMoreBtn onClick={seeMoreButtonHandler}>
                    <div className='closeSeeMore'>
                      <span>閉じる</span>
                    </div>
                  </CloseSeeMoreBtn>
                </>
              ) : (
                <SeeMoreBtn onClick={seeMoreButtonHandler}>
                  <div className='seeMore'>
                    <span>閉じるもっと見る</span>
                  </div>
                </SeeMoreBtn>
              )}
            </DescriptionWrapper>
          </Tabs.TabPane>
          <Tabs.TabPane tab='仕様・サイズ' key='tab-2'>
            <SizeChart chartData={productData.sizeChart} />
            <Specification specs={productData.intensiveJanSpecs} />
          </Tabs.TabPane>
        </Tabs>
      </InfoWrapper>
    </div>
  );
};
