import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components";
import { tshirtSection as data } from "../data";

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 1384px;
  width: 100%;
  margin: 20px auto 50px;
  padding-left: 64px;
  padding-right: 64px;
`;

const HeroRow = styled.div`
  display: flex;
  width: 100%;
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    width: 50%;
    padding-right: 64px;
    margin-top: 20px;
  }

  @media screen and (max-width: 1023.5px) and (min-width: 751px) {
    width: 48.78%;
    margin-top: 20px;
    padding-right: 56px;
  }

  @media screen and (max-width: 750.5px) {
    width: 100%;
    margin-top: 30px;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`;

const TextTitle = styled.div`
  margin-bottom: calc(30px - 0.25em);
  font-weight: bold;
  margin-top: -0.25em;
  font-size: 28px;

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1023.5px) and (min-width: 751px) {
    font-size: 24px;
  }

  @media screen and (max-width: 750.5px) {
    font-size: 24px;
  }
`;

const TextDescription = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: rgb(60, 60, 67);
  line-height: 1.5;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
`;

const ImageCol = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
`;

export const SectionPage = () => {
  const { id: sectionId } = useParams();
  console.log(sectionId);

  return (
    <ContentContainer>
      <Breadcrumb links={data.links} />
      <HeroRow>
        <TextCol>
          <TextTitle>{data.category_name}</TextTitle>
          <TextDescription>{data.descriptionHtml}</TextDescription>
        </TextCol>

        <ImageCol>
          <a href={data.linkUrl} draggable='false'>
            <img
              src={data.imageUrl}
              loading='lazy'
              alt={data.descriptionHtml}
              width='100%'
              height='auto'
            />
          </a>
        </ImageCol>
      </HeroRow>
    </ContentContainer>
  );
};
