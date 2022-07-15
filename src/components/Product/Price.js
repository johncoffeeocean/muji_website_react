import React from "react";
import styled from "styled-components";

const PriceWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const PriceText = styled.span`
  font-size: 11px;
  color: rgb(60, 60, 67);
`;

const PriceNum = styled.span`
  margin: 0px 5px;
  font-size: 26px;
  color: rgb(60, 60, 67);
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
`;

const PriceUnit = styled.span`
  font-size: 11px;
  color: rgb(60, 60, 67);
  font-weight: bold;
`;

const OldPrice = styled.div`
  display: inline-block;
  font-size: 11px;
  height: 32px;
  color: rgb(153, 153, 153);
  text-align: left;
`;

const OldPriceNum = styled.span`
  margin: 4px;
  font-size: 13px;
`;
const OldPriceUnit = styled.span`
  font-size: 11px;
  color: rgb(60, 60, 67);
  font-weight: bold;
`;

const RightArrow = styled.span`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  height: 10px;
`;

const NewPrice = styled.span`
  font-size: 11px;
  color: rgb(139, 26, 39);
`;

const NewPriceNum = styled.span`
  font-size: 26px;
  font-weight: 600;
  margin: 0px 4px;
`;

const NewPriceUnit = styled.span`
  font-weight: 600;
`;
export const Price = ({ productPrice }) => {
  let dateFormated = "";
  const oldPricesLen = productPrice.oldPrices?.length ?? undefined;

  if (oldPricesLen) {
    const year = productPrice.oldPrices[oldPricesLen - 1].oldPriceEndDate.slice(
      2,
      4,
    );
    const month = productPrice.oldPrices[
      oldPricesLen - 1
    ].oldPriceEndDate.slice(4, 6);
    const day = productPrice.oldPrices[oldPricesLen - 1].oldPriceEndDate.slice(
      6,
      8,
    );

    dateFormated = [year, month, day].join("/");
  }

  return (
    <div id='area-price'>
      <div style={{ marginBottom: 20 }}></div>
      {oldPricesLen ? (
        <PriceWrapper>
          <OldPrice>
            <span>~{dateFormated}</span>
            <br />
            <OldPriceNum>
              {new Intl.NumberFormat("ja-JP").format(
                productPrice.oldPrices[productPrice.oldPrices.length - 1]
                  .oldPrice,
              )}
            </OldPriceNum>
            <OldPriceUnit>
              <span>円</span>
            </OldPriceUnit>

            <RightArrow>→</RightArrow>
          </OldPrice>

          <NewPrice>
            <span>消費税込みで</span>
            <NewPriceNum>
              {new Intl.NumberFormat("ja-JP").format(productPrice.basicPrice)}
            </NewPriceNum>
            <NewPriceUnit>
              <span>円</span>
            </NewPriceUnit>
          </NewPrice>
        </PriceWrapper>
      ) : (
        <span>
          <PriceText>
            <span>消費税込みで</span>
          </PriceText>
          <PriceNum>
            {new Intl.NumberFormat("ja-JP").format(productPrice.basicPrice)}
          </PriceNum>
          <PriceUnit>
            <span>円</span>
          </PriceUnit>
        </span>
      )}
    </div>
  );
};
