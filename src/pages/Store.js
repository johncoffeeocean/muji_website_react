import React from 'react';
import styled from 'styled-components';
import { Layout, Notice } from '../components';
import { TopBanner } from '../components/TopBanner';
import { notice, carouselData } from '../data';

const TopBannerContainer = styled.div`
  min-height: 100px;
  margin-top: 30px;
`;

export const Store = () => {
  return (
    <Layout>
      <Notice data={notice} />

      <TopBannerContainer>
        {carouselData.map((bannerData) => (
          <TopBanner data={bannerData} />
        ))}
      </TopBannerContainer>

      <div style={{ height: 1000 }}></div>
    </Layout>
  );
};
