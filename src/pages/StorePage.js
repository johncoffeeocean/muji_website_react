import React, { useEffect } from "react";
import styled from "styled-components";
import { Category, Notice, TopBanner } from "../components";
import { itemCategory, notice, topBanner } from "../data";

const TopBannerContainer = styled.div`
  min-height: 100px;
  margin-top: 30px;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 1384px;
  width: 100%;
  margin: 20px auto 50px;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 20px;
`;

export const StorePage = () => {
  useEffect(() => {
    document.title = "無印良品";
  }, []);

  return (
    <ContentContainer>
      <Notice data={notice} />

      <TopBannerContainer>
        {topBanner.map((bannerData, index) => (
          <TopBanner data={bannerData} key={`topbanner-${index}`} />
        ))}
      </TopBannerContainer>

      <Category data={itemCategory} />
    </ContentContainer>
  );
};
