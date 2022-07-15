import React from "react";
import styled from "styled-components";

const DeliveryFreeBannerWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  align-items: center;
  color: rgb(139, 26, 39);
  margin-top: 40px;
`;

const DeliveryTitle = styled.div`
  min-width: 70px;
  line-height: 1.5;
  color: rgb(60, 60, 67);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 11px;
  padding: 0px;
`;

const DeliveryFreeBanner = styled.div`
  margin: 0px;
  line-height: 1.5;
  font-size: 14px;
  display: block;
  color: rgb(127, 0, 25);
`;

const DeliveryFee = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: -webkit-center;
  color: rgb(60, 60, 67);
  & > div {
    width: 33.33%;
  }

  .deliveryData__icon {
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
  }
  .deliveryData__item {
    font-weight: bold;
    margin-top: calc(11.5px - 0.25em);
    font-size: 14px;
    white-space: pre;
  }
`;

const AddressInputBtn = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  background: rgb(245, 245, 245);
  border-radius: 1.5em;
  margin-top: calc(11.5px - 0.25em);
  margin-bottom: 0px;
  padding: 0.4642em 0.75em !important;
`;

const FreeShippingBanner = styled.div`
  background: rgb(244, 238, 222);
  margin: 30px 0px 25px;
  height: 60px;
  text-align: center;
  color: rgb(127, 0, 25);
  font-size: 14px;
`;

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 50px;
  }
`;

const BannerTextWrapper = styled.div`
  margin-left: 40px;
`;

const BannerText = styled.div`
  span {
    font-size: 14px;
    font-weight: bold;
    color: rgb(60, 60, 67);
  }
`;
const BannerHighlightText = styled.div`
  span {
    font-weight: bold;
    font-size: 18px;
    color: rgb(127, 0, 25);
  }
`;

const DeliveryFeeNotice = styled.div`
  font-size: 14px;
  margin-top: 20px;
  margin-left: 3px;
`;

const DetailNew = styled.div`
  display: inline-flex;
  margin-top: 20px;
  justify-content: flex-end;
  cursor: pointer;
  align-items: center;
  a {
    color: rgb(60, 60, 67);
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
  }
  .iconModal {
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }
`;

const IconModal = () => (
  <svg id='icon_modal' viewBox='0 0 20 20'>
    <g>
      <path
        fill='currentColor'
        d='M 16.67 14.92 h -10 a 0.75 0.75 0 0 1 -0.75 -0.75 V 2.5 a 0.75 0.75 0 0 1 0.75 -0.75 h 10 a 0.76 0.76 0 0 1 0.75 0.75 V 14.17 A 0.76 0.76 0 0 1 16.67 14.92 Z m -9.25 -1.5 h 8.5 V 3.25 H 7.42 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 13.33 18.25 h -10 a 0.76 0.76 0 0 1 -0.75 -0.75 V 5.83 a 0.75 0.75 0 0 1 1.5 0 V 16.75 h 9.25 a 0.75 0.75 0 0 1 0 1.5 Z'
      ></path>
      <rect fill='none' width='20' height='20'></rect>
    </g>
  </svg>
);

const IconDelivery = () => (
  <svg id='icon_delivery' viewBox='0 0 50 50'>
    <g>
      <path
        fill='currentColor'
        d='M 46.14 34.18 l -4.31 -11.1 a 0.87 0.87 0 0 0 -0.8 -0.54 H 35.22 V 12.61 a 0.85 0.85 0 0 0 -0.85 -0.85 H 9.92 a 0.85 0.85 0 0 0 -0.85 0.85 V 41.13 a 0.85 0.85 0 0 0 0.85 0.85 h 3.89 a 3.34 3.34 0 0 0 6.11 0 H 33.81 a 3.34 3.34 0 0 0 6.11 0 l 5.31 0 h 0 a 0.84 0.84 0 0 0 0.85 -0.84 l 0.12 -6.67 A 1 1 0 0 0 46.14 34.18 Z M 10.77 13.46 H 33.52 V 32.11 H 10.77 Z m 6.1 28.82 a 1.66 1.66 0 1 1 1.65 -1.66 A 1.65 1.65 0 0 1 16.87 42.28 Z m 20 0 a 1.66 1.66 0 1 1 1.65 -1.66 A 1.65 1.65 0 0 1 36.87 42.28 Z m 7.53 -2 l -4.22 0 a 3.33 3.33 0 0 0 -6.63 0 H 20.18 a 3.33 3.33 0 0 0 -6.63 0 H 10.77 V 33.81 h 23.6 a 0.85 0.85 0 0 0 0.85 -0.85 V 24.24 h 5.23 l 4 10.4 Z'
      ></path>
      <rect fill='none' width='50' height='50'></rect>
    </g>
  </svg>
);

const IconBox = () => (
  <svg id='icon_box' viewBox='0 0 50 50'>
    <g>
      <path
        fill='currentColor'
        d='M 20.44 25 a 0.85 0.85 0 0 0 0.85 0.85 h 7.08 a 0.85 0.85 0 1 0 0 -1.7 H 21.29 A 0.85 0.85 0 0 0 20.44 25 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 41.8 19.69 a 0.72 0.72 0 0 0 -0.06 -0.29 l 0 -0.07 l 0 -0.08 l -4.31 -7.08 a 0.87 0.87 0 0 0 -0.73 -0.41 H 13.31 a 0.84 0.84 0 0 0 -0.73 0.42 L 8.37 19.26 l 0 0.07 l 0 0.07 a 0.94 0.94 0 0 0 -0.06 0.29 h 0 V 40.93 a 0.85 0.85 0 0 0 0.85 0.85 H 41 a 0.85 0.85 0 0 0 0.85 -0.85 V 19.69 Z m -2.36 -0.85 H 25.68 V 13.46 H 36.16 Z M 13.79 13.46 H 24 v 5.38 H 10.6 Z M 40.1 40.08 H 10 V 20.54 H 40.1 Z'
      ></path>
      <rect fill='none' width='50' height='50'></rect>
    </g>
  </svg>
);

const IconCalendar = () => (
  <svg id='icon_calendar' viewBox='0 0 50 50'>
    <g>
      <path
        fill='currentColor'
        d='M 41 11.76 H 34.73 V 9.07 a 0.85 0.85 0 0 0 -1.7 0 v 2.69 H 17 V 9.07 a 0.85 0.85 0 1 0 -1.7 0 v 2.69 H 9.1 a 0.85 0.85 0 0 0 -0.85 0.85 V 40.93 a 0.85 0.85 0 0 0 0.85 0.85 H 41 a 0.85 0.85 0 0 0 0.85 -0.85 V 12.61 A 0.85 0.85 0 0 0 41 11.76 Z m -0.85 1.7 v 5.38 H 10 V 13.46 Z M 10 40.08 V 20.54 H 40.1 V 40.08 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 17.22 27.92 H 15.55 a 0.85 0.85 0 0 1 0 -1.7 h 1.67 a 0.85 0.85 0 0 1 0 1.7 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 23 27.92 H 21.31 a 0.85 0.85 0 0 1 0 -1.7 H 23 a 0.85 0.85 0 1 1 0 1.7 Z'
      ></path>
      <path
        fill='currentColor'
        d='M28.74,27.92H27.08a.85.85,0,0,1,0-1.7h1.66a.85.85,0,1,1,0,1.7Z'
      ></path>
      <path
        fill='currentColor'
        d='M 34.51 27.92 H 32.84 a 0.85 0.85 0 1 1 0 -1.7 h 1.67 a 0.85 0.85 0 0 1 0 1.7 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 17.22 34.39 H 15.55 a 0.85 0.85 0 1 1 0 -1.69 h 1.67 a 0.85 0.85 0 1 1 0 1.69 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 23 34.39 H 21.31 a 0.85 0.85 0 1 1 0 -1.69 H 23 a 0.85 0.85 0 1 1 0 1.69 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 28.74 34.39 H 27.08 a 0.85 0.85 0 1 1 0 -1.69 h 1.66 a 0.85 0.85 0 1 1 0 1.69 Z'
      ></path>
      <path
        fill='currentColor'
        d='M 34.51 34.39 H 32.84 a 0.85 0.85 0 1 1 0 -1.69 h 1.67 a 0.85 0.85 0 1 1 0 1.69 Z'
      ></path>
      <rect fill='none' width='50' height='50'></rect>
    </g>
  </svg>
);

export const Delivery = ({ productData, freeDelivery }) => {
  return (
    <div id='area-delivery'>
      {freeDelivery && (
        <DeliveryFreeBannerWrapper>
          <DeliveryTitle>
            <span>配送</span>
          </DeliveryTitle>
          <DeliveryFreeBanner>
            <span>
              この商品は【ネットストア限定、消費税込{freeDelivery}
              円以上で配送料無料、対象商品】です
            </span>
          </DeliveryFreeBanner>
        </DeliveryFreeBannerWrapper>
      )}

      <div>
        <DeliveryFee>
          <div>
            <div className='deliveryData__icon'>
              <IconDelivery />
            </div>
            <span>配送料</span>
            <div className='deliveryData__item'>
              いくつ買っても
              <br />
              500円
            </div>
          </div>
          <div>
            <div className='deliveryData__icon'>
              <IconBox />
            </div>
            <span>配送区分</span>
            <div className='deliveryData__item'>宅配品</div>
          </div>
          <div>
            <div className='deliveryData__icon'>
              <IconCalendar />
            </div>
            <div>
              <span>最短お届け日</span>
              <AddressInputBtn>
                <span>住所を入力</span>
              </AddressInputBtn>
            </div>
          </div>
        </DeliveryFee>
        <a
          href='https://www.muji.com/jp/notice/pickup.html'
          target='_blank'
          rel='noreferrer'
        >
          <FreeShippingBanner>
            <BannerWrapper>
              <img
                src='https://www.muji.com/jp/img/store/notice/pickup/shop.png'
                alt=''
              />
              <BannerTextWrapper>
                <BannerText>
                  <span>無印良品の店舗で受け取って </span>
                </BannerText>
                <BannerHighlightText>
                  <span>配送料無料</span>
                </BannerHighlightText>
              </BannerTextWrapper>
            </BannerWrapper>
          </FreeShippingBanner>
        </a>
        <DeliveryFeeNotice>
          <span>※店舗でのご注文と配送料が異なる場合がございます。</span>
        </DeliveryFeeNotice>
        <div style={{ textAlign: "right", marginRight: 25 }}>
          <DetailNew>
            <a
              href='https://www.muji.net/mt/contact/detail_list/014397.html'
              className='iframe fancyBox'
              target='_blank'
              rel='noreferrer'
            >
              <span>配送料区分と配送料について</span>
            </a>
            <div className='iconModal'>
              <IconModal />
            </div>
          </DetailNew>
        </div>
      </div>
    </div>
  );
};
