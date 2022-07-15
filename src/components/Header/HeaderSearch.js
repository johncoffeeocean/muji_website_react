import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai";

const FormContainer = styled(Form)`
  background-color: white;
  border-radius: 4px;
  position: relative;
  z-index: 51;
`;

const SearchBar = styled(Input)`
  @media (min-width: 1024.5px) {
    background: rgb(255, 255, 255);
    padding: 19px 50px;
    top: 0px;
  }
  @media (min-width: 750.5px) {
    background: rgb(255, 255, 255);
    top: 0px;
  }

  span.ant-input-group-addon {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(245, 245, 245);
    cursor: pointer;
    padding: 0px 10px;
    line-height: 1.5;
  }

  .ant-input-affix-wrapper {
    border-width: 2px 2px 2px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-top-color: rgb(245, 245, 245);
    border-right-color: rgb(245, 245, 245);
    border-bottom-color: rgb(245, 245, 245);
    border-image: initial;
    border-radius: 4px;
    border-left-style: initial;
    border-left-color: initial;
    padding: 0px 10px;
  }

  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper:focus-visible,
  .ant-input-affix-wrapper-focused {
    outline: none;
    border-color: rgb(245, 245, 245);
    box-shadow: none;
  }
  .ant-input-affix-wrapper:hover {
    border-color: rgb(245, 245, 245);
    box-shadow: none;
  }

  input {
    height: 28px;
    padding: 0px 10px;
    font-size: 16px;
  }

  input:focus {
    outline: none;
    border-color: rgb(245, 245, 245);
    box-shadow: none;
  }
`;

const SearchButtonWrapper = styled.div`
  font-size: 0.875rem;
  color: rgb(60, 60, 67);
  position: relative;
  text-align: left;
  min-width: 100px;
  width: 100px;
  justify-content: center;
  display: flex;
  outline: none;

  .headerBtnMessage {
    display: inline-block;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ant-input {
    color: rgb(60, 60, 67);
    background-color: rgb(255, 255, 255);
  }
`;

const CaretDownIcon = styled(AiFillCaretDown)`
  width: 20%;
  font-size: 10px;
  margin-top: 5px;
`;

const SearchButton = ({ message }) => {
  return (
    <SearchButtonWrapper className='searchButton'>
      <div className='headerBtnMessage'>{message}</div>
      <CaretDownIcon color='#8A8A8E' />
    </SearchButtonWrapper>
  );
};

export const HeaderSearch = () => {
  return (
    <div className='headerSearch'>
      <FormContainer
        id='searchLayoutForm'
        style={{ zIndex: 99, position: "relative" }}
      >
        <SearchBar
          id='searchInputLayout'
          placeholder='キーワードで探す'
          maxLength='128'
          type='text'
          size='default'
          allowClear={<AiFillCloseCircle />}
          addonBefore={<SearchButton message='すべて' />}
        ></SearchBar>
      </FormContainer>
    </div>
  );
};
