import React from "react";
import { Carousel, Col, Row } from "antd";
import styled from "styled-components";

const SlickSlider = styled(Carousel)`
  .slick-dots {
    display: flex !important;
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
    margin: 0;
  }
  .slick-dots li {
    width: 1px;
    flex: 1 1 0%;
    height: 4px;
    background-color: rgba(60, 60, 67, 0.2);
    margin: 0px;
  }
  .slick-dots li button {
    height: 4px;
    border-radius: 0;
    background-color: transparent !important;
  }
  .slick-dots li:first-child {
    border-radius: 3px 0 0 3px !important;
  }
  .slick-dots li:last-child {
    border-radius: 0 3px 3px 0 !important;
  }
  .slick-dots li button::before {
    opacity: 1;
    content: '';
    width: 100%;
  }
  .slick-dots .slick-active {
    background-color: rgb(60, 60, 67);
    border-radius: 3px !important;
  }
  .slick-dots .slick-active button {
    border-radius: 3px !important;
    opacity: 0.5;
  }
  .slick-dots .slick-active button::before {
    opacity: 0.5;
  }

  @media (min-width: 992px) {
    .slick-dots {
      display: none !important;
    }
  }
  @media (min-width: 352px) {
    .slick-dots li {
      margin: 0px 0px 10px;
    }
  }
`;

const SlickSlideImg = styled.img`
  cursor: -webkit-zoom-in;
  width: 100%;
  height: auto;
`;

const ThumbnailContainer = styled(Row)`
  margin-top: 20px;
`;

const Thumbnail = styled.div`
  padding: 2px;
  cursor: pointer;
  position: relative;
  border: 0px solid rgba(88, 88, 88, 0.5);

  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    transition: background-color 0.3s ease 0s;
  }
  &:hover::after {
    background-color: rgba(60, 60, 67, 0.05);
  }
`;

const ModelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin: 20px 0px;
  padding-left: 0px;

  & > span {
    text-align: left;
    font-size: 12px;
    color: rgb(60, 60, 67);
  }
`;

const ThumbnailImg = styled.img`
  width: 100%;
  user-select: none;
  height: auto;
`;

export const PictureColumn = ({ pictureData, itemName }) => {
  const swipeImageList = pictureData.map(
    (imgData) => imgData.attributes.damImageResizes[1260],
  );
  const thumbPictureList = pictureData.map(
    (imgData) => imgData.attributes.damImageResizes[400],
  );

  return (
    <Col lg={14} xs={24} className='pictureCol'>
      <SlickSlider easing='ease' swipeToSlide draggable infinite autoplay>
        {swipeImageList.map((item, index) => (
          <div key={`banner-${index}`}>
            <SlickSlideImg src={item} alt={itemName} loading='lazy' />
          </div>
        ))}
      </SlickSlider>

      <ModelInfo>
        <span>
          <span>身長</span> : 180cm / <span>着用サイズ</span> : L
        </span>
      </ModelInfo>

      <ThumbnailContainer gutter={[18, 18]}>
        {thumbPictureList.map((item, index) => (
          <Col key={`thumb-${index}`} span={8}>
            <Thumbnail>
              <ThumbnailImg src={item} alt='' loading='lazy' />
            </Thumbnail>
          </Col>
        ))}
      </ThumbnailContainer>
    </Col>
  );
};
