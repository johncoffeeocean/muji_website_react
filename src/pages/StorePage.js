import React from 'react';
import styled from 'styled-components';
import { Notice, TopBanner, Category } from '../components';
import { notice, topBanner, itemCategory } from '../data';

const TopBannerContainer = styled.div`
  min-height: 100px;
  margin-top: 30px;
`;

const ContentContainer = styled.main`
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
  return (
    <ContentContainer>
      <Notice data={notice} />

      <TopBannerContainer>
        {topBanner.map((bannerData, index) => (
          <TopBanner data={bannerData} key={`topbanner-${index}`}/>
        ))}
      </TopBannerContainer>

      <Category data={itemCategory} />
    </ContentContainer>
  );
};
