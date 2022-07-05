import React from 'react';
import styled from 'styled-components';

const Heading2Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading2Content = styled.h2`
  margin-top: -0.25em;
  margin-bottom: -0.25em;
  color: rgb(60, 60, 67);
  font-size: 26px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Heading2 = ({ children }) => {
  return (
    <Heading2Container className='heading--lvl2-container'>
      <Heading2Content className='heading--lv2'>{children}</Heading2Content>
    </Heading2Container>
  );
};

const Heading3Container = styled.div`
  margin-top: 40px;
`;

const Heading3Content = styled.h3`
  color: rgb(60, 60, 67);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Heading3 = ({ children }) => {
  return (
    <Heading3Container className='heading--lvl3-container'>
      <Heading3Content className='heading--lv3'>{children}</Heading3Content>
    </Heading3Container>
  );
};
