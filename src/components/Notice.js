import React from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 20px 30px;
  background-color: #f5f5f5;
  text-size-adjust: 100%;
`;

const NoticeList = styled.ul`
  margin: 0;
  padding: 0;
`;

const NoticeListItem = styled.li`
  list-style: none;
`;

const NoticeText = styled.a`
  color: rgb(60, 60, 67);
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', Meiryo,
    メイリオ, '游ゴシック Medium', 'Yu Gothic Medium', 游ゴシック体, 'Yu Gothic',
    YuGothic, 'MS PGothic', Osaka, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  transition: opacity 0.3s ease 0s, color 0.3s ease 0s,
    background-color 0.3s ease 0s;
  margin-top: -0.25em;
  margin-bottom: -0.25em;

  &:hover {
    color: #000;
    text-decoration: underline;
    text-underline-offset: 2px;
    outline-width: thick;
  }
`;

export const Notice = ({ data = {} }) => {
  return (
    <NoticeContainer className='notice'>
      <NoticeList className='notice__list'>
        {data.map((item, index) => (
          <NoticeListItem className='notice__item' key={`notice-${index}`}>
            <NoticeText href={item.href}>{item.text}</NoticeText>
          </NoticeListItem>
        ))}
      </NoticeList>
    </NoticeContainer>
  );
};
