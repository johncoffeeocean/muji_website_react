import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const RowWrapper = styled(Row)`
  @media (min-width: 992px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

const LeftInfoCol = styled(Col)`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }

  @media (min-width: 992px) {
    padding-top: 0px;
  }
`;

const DetailTitleWrapper = styled.div`
  display: flex;
`;

const DetailTitle = styled.div`
  display: flex;
  margin-right: auto;

  h1 {
    margin-top: -0.25em;
    color: rgb(60, 60, 67);
    margin-bottom: calc(30px - 0.25em);
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const AddWishListBtn = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Detail = () => {
  return (
    <RowWrapper>
      <Col lg={14} xs={24}>
        <div>
          <img
            src='https://www.muji.com/public/media/img/item/4547315172931_1260.jpg'
            loading='lazy'
            width='750'
            height='750'
            alt='風を通すＴシャツ'
          />
        </div>
      </Col>
      <LeftInfoCol lg={8} xs={24} offset={2}>
        <DetailTitleWrapper>
          <DetailTitle>風を通すＴシャツ</DetailTitle>
        </DetailTitleWrapper>
        <AddWishListBtn></AddWishListBtn>
      </LeftInfoCol>
    </RowWrapper>
  );
};

export default Detail;
