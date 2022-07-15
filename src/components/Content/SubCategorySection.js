import React from "react";
import styled from "styled-components";

const SectionContainer = styled.li`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  height: 100%;
`;

const SectionTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 3px 3px 0 0;
  background-color: #f5f5f5;
  color: #3c3c43;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitleText = styled.span`
  margin: 0 5% 0 15px;
  flex-grow: 1;
  flex-basis: 155px;
`;

const SectionTitleThumb = styled.span`
  height: auto;
  flex-basis: 100px;

  img {
    width: 100%;
    height: auto;
    border-radius: 0 3px 0 0;
    vertical-align: bottom;
    -webkit-tap-highlight-color: transparent;
  }
`;

const SectionLinkList = styled.ul`
  padding: 20px 15px 20px;

  .contents__accordion__linkList__item:first-child {
    margin-top: 0;
  }
`;

const SectionLinkListItem = styled.li`
  margin-top: 10px;

  a {
    display: inline-block;
    width: 100%;
    padding: 5px;
    color: #3c3c43;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
  }

  a:hover {
    background-color: #F5F5F5;
    color: #000;
    text-decoration: none;
  }
`;

export const SubCategorySection = ({ sectionIndex, sectionData }) => {
  return (
    <SectionContainer className='accordion__list__item'>
      <span className='contents__accordion__link'>
        <SectionTitle className='sectionCategory__itemName contents__accordion__title'>
          <SectionTitleText className='contents__accordion__title__text'>
            {sectionData.title}
          </SectionTitleText>
          <SectionTitleThumb className='sectionCategory__itemTmb contents__accordion__thumb'>
            <img
              src={sectionData.thumbUrl}
              alt={sectionData.title}
              width='102'
              height='100'
              loading='lazy'
              className='sectionCategory__itemImg contents__accordion__img'
            />
          </SectionTitleThumb>
        </SectionTitle>
      </span>

      <SectionLinkList className='contents__accordion__linkList'>
        {sectionData.links.map((link, linkIndex) => (
          <SectionLinkListItem
            className='contents__accordion__linkList__item'
            key={`section-${sectionIndex}-${linkIndex}`}
          >
            <a
              className='contents__accordion__linkList__link'
              href={link.url}
            >
              {link.text}
            </a>
          </SectionLinkListItem>
        ))}
      </SectionLinkList>
    </SectionContainer>
  );
};
