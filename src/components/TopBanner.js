import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 30px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: inline-block;

  & > * {
    font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', Meiryo,
      メイリオ, '游ゴシック Medium', 'Yu Gothic Medium', 游ゴシック体,
      'Yu Gothic', YuGothic, 'MS PGothic', Osaka, arial, sans-serif;
    color: rgb(60, 60, 67);
  }

  a > span::after {
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 0.1;
    transition: opacity 0.3s ease 0s, color 0.3s ease 0s,
      background-color 0.3s ease 0s;
  }

  & a > span:hover::after {
    background-color: rgb(60, 60, 67);
  }
`;

const ContentImgContainer = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
`;

const ContentImg = styled.img`
  height: auto;
  vertical-align: bottom;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  border: 0px;
  display: inline-block !important;
`;

const ContentTitle = styled.h2`
  font-size: 28px;
  word-break: normal;
  font-weight: bold;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: 25px;
  margin-bottom: 0px;
  padding: 0px;
  transition: color 0.3s ease 0s;
`;

const ContentHtml = styled.div`
  word-break: normal;
  font-size: 18px;
  font-weight: 400;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 0px;
  padding: 0px;
  transition: color 0.3s ease 0s;
`;

export const TopBanner = ({ data, settings = {} }) => {
  const itemData = Array.isArray(data) ? data : [data];

  return (
    <CarouselContainer>
      <Carousel autoplay easing='ease'>
        {itemData.map((item, index) => (
          <ContentContainer key={`banner-${index}`}>
            <ContentImgContainer>
              <a href={item.linkUrl}>
                <span>
                  <ContentImg src={item.imageUrl} alt={item.title} />
                </span>
              </a>
            </ContentImgContainer>

            <a href={item.linkUrl}>
              <ContentTitle>{item.title}</ContentTitle>
              <ContentHtml
                dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
              ></ContentHtml>
            </a>
          </ContentContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};
