import React from 'react';
import styled from 'styled-components';
import { Layout, Notice, TopBanner, Category } from '../components';
import { notice, topBanner, itemCategory } from '../data';

const TopBannerContainer = styled.div`
  min-height: 100px;
  margin-top: 30px;
`;

export const Store = () => {
  return (
    <Layout>
      <Notice data={notice} />

      <TopBannerContainer>
        {topBanner.map((bannerData, index) => (
          <TopBanner data={bannerData} key={`topbanner-${index}`}/>
        ))}
      </TopBannerContainer>

      <Category data={itemCategory} />

      <div style={{ height: 100 }}></div>
    </Layout>
  );
};
