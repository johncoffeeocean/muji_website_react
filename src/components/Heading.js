import React from "react";
import styled from "styled-components";

const Heading1Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading1Content = styled.h1`
  margin: 0;
  color: rgb(60, 60, 67);
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Heading1 = ({ children, container = true, ...props }) => {
  return container ? (
    <Heading1Container className='heading--lvl1-container' {...props}>
      <Heading1Content className='heading--lv1'>{children}</Heading1Content>
    </Heading1Container>
  ) : (
    <Heading2Content className='heading--lv2'>{children}</Heading2Content>
  );
};

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

export const Heading2 = ({ children, container = true, ...props }) => {
  return container ? (
    <Heading2Container className='heading--lvl2-container' {...props}>
      <Heading2Content className='heading--lv2'>{children}</Heading2Content>
    </Heading2Container>
  ) : (
    <Heading2Content className='heading--lv2'>{children}</Heading2Content>
  );
};

const Heading3Container = styled.div`
  margin-top: 40px;
`;

export const Heading3Content = styled.h3`
  color: rgb(60, 60, 67);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Heading3 = ({ children, container = true, ...props }) => {
  return container ? (
    <Heading3Container className='heading--lvl3-container' {...props}>
      <Heading3Content className='heading--lv3'>{children}</Heading3Content>
    </Heading3Container>
  ) : (
    <Heading3Content className='heading--lv3'>{children}</Heading3Content>
  );
};
