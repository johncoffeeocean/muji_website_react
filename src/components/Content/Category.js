import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

import { Heading2, Heading3 } from "../Heading";
import { SubCategorySection } from "./SubCategorySection";

const SubCategoryListWrap = styled.div`
  margin-top: 30px;
`;

export const Category = ({ data }) => {
  return (
    <div className='itemCategory' style={{ marginTop: 85, marginBottom: 85 }}>
      <Heading2>商品カテゴリ</Heading2>

      <ul className='itemCategory__list'>
        {data.map((subCategory, index) => (
          <li className='itemCategory__list__item' key={`subCategory-${index}`}>
            <Heading3>{subCategory.title}</Heading3>
            <SubCategoryListWrap className='accordion__wrap'>
              <ul className='accordion__list'>
                <Row gutter={[30, 30]}>
                  {subCategory.sections.map((sectionData, sectionIndex) => (
                    <Col
                      span={6}
                      xl={6}
                      lg={12}
                      md={24}
                      key={`section-${sectionIndex}`}
                    >
                      <SubCategorySection
                        className='accordion__list__item'
                        sectionData={sectionData}
                        sectionIndex={sectionIndex}
                      />
                    </Col>
                  ))}
                </Row>
              </ul>
            </SubCategoryListWrap>
          </li>
        ))}
      </ul>
    </div>
  );
};
