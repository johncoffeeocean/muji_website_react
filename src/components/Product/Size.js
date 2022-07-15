import React, { useState } from "react";
import styled from "styled-components";
import { Heading3 } from "../Heading";

const SizeWrapper = styled.div`
  margin-top: 30px;
`;

const SizeOptionHeading = styled.div`
  h3 {
    margin-bottom: calc(15px - 0.25em);
    display: inline-block;
  }
  a {
    color: rgb(96, 179, 250);
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    margin-left: 10px;
  }
  a:visited {
    text-decoration: none;
    outline: 0px;
  }
`;

const SizeOptionList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  flex-wrap: wrap;
  margin-bottom: -10px;
`;

const SizeOption = styled.li`
  margin: 0px 10px 10px 0px;
  max-width: none;
  flex: 0 0 auto;

  input {
    display: none;
  }
  label {
    display: inline-block;
    min-width: 72px;
    border: 1px solid rgb(216, 216, 217);
    padding: 11.5px 17px;
    line-height: 1.5;
    font-size: 14px;
    color: rgb(60, 60, 67);
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
  }

  input:checked + label {
    border: 2px solid rgb(60, 60, 67);
    padding: 10.5px 16px;
  }
`;

export const Size = () => {
  const [selectedSize, setSelectedSize] = useState("size-143-0");

  return (
    <div id='area-size'>
      <SizeWrapper>
        <SizeOptionHeading>
          <Heading3 container={false}>
            <span>サイズ</span>
          </Heading3>
          <a
            href='https://www.muji.net/mt/contact/choose/032979.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>サイズガイドはこちら</span>
          </a>
        </SizeOptionHeading>
        <SizeOptionList id='size'>
          <SizeOption>
            <input
              id='size-143-0'
              type='radio'
              name='size'
              value='143'
              defaultChecked={selectedSize === "size-143-0"}
              onClick={() => setSelectedSize("size-143-0")}
            />
            <label htmlFor='size-143-0'>Ｓ～Ｍ</label>
          </SizeOption>
          <SizeOption>
            <input
              id='size-293-1'
              type='radio'
              name='size'
              value='293'
              defaultChecked={selectedSize === "size-293-1"}
              onClick={() => setSelectedSize("size-293-1")}
            />
            <label htmlFor='size-293-1'>Ｌ～ＸＬ</label>
          </SizeOption>
          <SizeOption>
            <input
              id='size-367-2'
              type='radio'
              name='size'
              value='367'
              defaultChecked={selectedSize === "size-367-2"}
              onClick={() => setSelectedSize("size-367-2")}
            />
            <label htmlFor='size-367-2'>ＸＸＳ～ＸＳ</label>
          </SizeOption>
        </SizeOptionList>
      </SizeWrapper>
    </div>
  );
};
