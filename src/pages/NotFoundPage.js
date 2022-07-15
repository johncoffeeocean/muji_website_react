import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 732px;
  width: 100%;
  margin: 40px auto 90px;
`;

export const NotFoundPage = () => {
  return (
    <ContentContainer class='sc-qapaw iJULWE'>
      <h1 class='transme'>お探しのページは見つかりません</h1>
      <p class='error-header__sub transme'>
        いつも無印良品をご利用いただき、誠にありがとうございます。
        <br />
        お客さまのお探しのページは、削除された、名前が変更された、または現在利用できない可能性があります。
      </p>
      <a href='/jp/ja/store'>ネットストアトップへ戻る</a>
    </ContentContainer>
  );
};
