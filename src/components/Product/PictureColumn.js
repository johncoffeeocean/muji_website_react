import React, { useState } from "react";
import { Carousel, Col } from "antd";
import styled from "styled-components";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

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
    content: "";
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

const ThumbnailContainer = styled.div`
  display: flex;
  margin-right: -18px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Thumbnail = styled.div`
  width: calc((100% - 48px) / 3);
  margin-right: 16px;
  margin-bottom: 15px;
  padding: 2px;
  cursor: pointer;
  border-color: rgba(88, 88, 88, 0.5);
  border-style: solid;
  position: relative;
  border-width: 0px;

  &::after {
    content: "";
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
  const [galleryOpened, setGalleryOpened] = useState(false);
  const [galleryImgIndex, setGalleryImgIndex] = useState(0);
  const [thumbGalleryOpened, setThumbGalleryOpened] = useState(false);
  const [thumbGalleryImgIndex, setThumbGalleryImgIndex] = useState(0);

  const swipeImageList = pictureData.map((imgData) => ({
    src: imgData.attributes.damImageResizes[1260],
    w: 1260,
    h: 1260,
  }));
  const thumbPictureList = pictureData.map((imgData) => ({
    src: imgData.attributes.damImageResizes[1260],
    thumbnail: imgData.attributes.damImageResizes[400],
    w: 1260,
    h: 1260,
  }));

  const options = {
    index: galleryImgIndex,
    getThumbBoundsFn: function (index) {
      // Find thumbnail
      const thumbnail = document.querySelector(".slick-slide.slick-active.slick-current");
      const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      const rect = thumbnail.getBoundingClientRect();

      return {
        x: rect.left,
        y: rect.top + pageYScroll,
        w: rect.width,
      };
    },
    showAnimationDuration: 0,
  };

  const thumbGalleryOptions = {
    index: thumbGalleryImgIndex,
    getThumbBoundsFn: function (index) {
      // Find thumbnail
      const thumbnail = document.querySelectorAll(".image-box")[index];
      const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      const rect = thumbnail.getBoundingClientRect();

      return {
        x: rect.left,
        y: rect.top + pageYScroll,
        w: rect.width,
      };
    },
    showAnimationDuration: 0,
  };

  return (
    <Col lg={14} xs={24} className="pictureCol">
      <SlickSlider easing="ease" swipeToSlide draggable infinite autoplay id="">
        {swipeImageList.map((item, index) => (
          <div key={`banner-${index}`}>
            <SlickSlideImg
              src={item.src}
              alt={itemName}
              loading="lazy"
              onClick={() => {
                setGalleryImgIndex(index);
                setGalleryOpened(true);
              }}
            />
          </div>
        ))}
      </SlickSlider>
      <PhotoSwipe
        items={thumbPictureList}
        isOpen={galleryOpened}
        options={options}
        onClose={() => setGalleryOpened(false)}
      />

      <ModelInfo>
        <span>
          <span>身長</span> : 180cm / <span>着用サイズ</span> : L
        </span>
      </ModelInfo>

      <ThumbnailContainer id="gallery">
        {thumbPictureList.map((item, index) => (
          <Thumbnail
            key={index}
            className="image-box"
            onClick={() => {
              setThumbGalleryImgIndex(index);
              setThumbGalleryOpened(true);
            }}
          >
            <ThumbnailImg src={item.thumbnail} alt="" loading="lazy" />
          </Thumbnail>
        ))}
        <PhotoSwipe
          items={thumbPictureList}
          isOpen={thumbGalleryOpened}
          options={thumbGalleryOptions}
          onClose={() => setThumbGalleryOpened(false)}
        />
      </ThumbnailContainer>
    </Col>
  );
};
