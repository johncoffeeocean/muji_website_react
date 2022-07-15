import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../../data/menus";
import { VscClose } from "react-icons/vsc";
import styled from "styled-components";
import { Modal } from "./Modal";

const DropMenu = styled.div`
  position: relative;
  width: 100%;
  padding: 50px 64px;
  max-width: 1384px;
  margin: 0 auto;
  background-color: #fff;
  height: auto;

  .dropMenuCategory__anothermenu {
    display: block;
    max-width: 321px;
    border-left: 1px solid #e2e2e2;
    padding-left: 40px;
    margin-left: 85px;
  }

  .dropMenuCategory__container,
  .dropMenuCategory__columnList {
    display: flex;
  }
  .dropMenuCategory__body {
    display: none;
    flex-grow: 1;
  }
  .dropMenuCategory__columnList {
    width: 100%;
    max-width: 100%;
  }
  .dropMenuCategory__columnList__item:not(:first-child) {
    margin-left: 40px;
  }
  .dropMenuCategory__columnList__item {
    width: 100%;
    max-width: 33.3333%;
  }
  .dropMenuCategory__menu:not(:first-child) {
    margin-top: 35px;
  }
  .dropMenuCategory__menu__title {
    font-family: Hiragino Kaku Gothic ProN, ヒラギノ角ゴ Pro W3, Meiryo,
      メイリオ, 游ゴシック Medium, Yu Gothic Medium, 游ゴシック体, Yu Gothic,
      YuGothic, MS PGothic, Osaka, arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
    font-size: 15px;
    color: #3c3c43;
    padding-left: 5px;
  }
  .dropMenuCategory__menu__linkList {
    margin-top: 10px;
  }
  .dropMenuCategory__menu__linkList__item:not(:first-child) {
    margin-top: 4px;
  }
  .dropMenuCategory__menu__linkList__link {
    font-family: Hiragino Kaku Gothic ProN, ヒラギノ角ゴ Pro W3, Meiryo,
      メイリオ, 游ゴシック Medium, Yu Gothic Medium, 游ゴシック体, Yu Gothic,
      YuGothic, MS PGothic, Osaka, arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #3c3c43;
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
    display: block;
    padding: 5px;
    font-size: 14px;
    -webkit-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }
  .dropMenuCategory__menu__linkList__link:hover {
    text-decoration: none;
    opacity: 1;
    background-color: #f5f5f5;
  }
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 6px;
  color: #3c3c43;
  display: inline-block;
  width: 48px;
  height: 48px;
  text-transform: none;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const LinkItem = ({ link, onCloseCategoryModal }) => {
  return (
    <li className='dropMenuCategory__menu__linkList__item'>
      {link.to ? (
        <a
          href={link.to}
          className='dropMenuCategory__menu__linkList__link'
          onClick={onCloseCategoryModal}
        >
          {link.text}
        </a>
      ) : (
        <Link
          to={link.sectionCode ? `/section/${link.sectionCode}` : link.to}
          className='dropMenuCategory__menu__linkList__link'
          onClick={onCloseCategoryModal}
        >
          {link.text}
        </Link>
      )}
    </li>
  );
};

const Column = ({ columnData, onCloseCategoryModal }) => {
  return (
    <li className='dropMenuCategory__columnList__item'>
      {columnData.map((menu, menuIndex) => (
        <div className='dropMenuCategory__menu' key={`menu-${menuIndex}`}>
          <div className='dropMenuCategory__menu__title'>{menu.text}</div>
          <ul className='dropMenuCategory__menu__linkList'>
            {menu.children.map((link, linkIndex) => (
              <LinkItem
                key={`link-${linkIndex}`}
                link={link}
                onCloseCategoryModal={onCloseCategoryModal}
              />
            ))}
          </ul>
        </div>
      ))}
    </li>
  );
};

const Category = ({
  currentCategory,
  categoryData,
  index,
  onCloseCategoryModal,
}) => {
  return (
    <div
      id={`dropMenuCategory__${index}`}
      className='dropMenuCategory__body'
      style={{
        display: currentCategory === categoryData.text ? "block" : "none",
      }}
    >
      <ul className='dropMenuCategory__columnList'>
        {categoryData.parent.map((columnData, colIndex) => (
          <Column
            key={`column-${colIndex}`}
            columnData={columnData}
            onCloseCategoryModal={onCloseCategoryModal}
          />
        ))}
      </ul>
    </div>
  );
};

const AnotherMenu = ({ topMenu, bottomMenu }) => {
  return (
    <div className='dropMenuCategory__anothermenu'>
      {topMenu.map((menu, menuIndex) => (
        <div className='dropMenuCategory__menu' key={`menu-${menuIndex}`}>
          <div className='dropMenuCategory__menu__title'>{menu.text}</div>
          <ul className='dropMenuCategory__menu__linkList'>
            {menu.children.map((link, linkIndex) => (
              <LinkItem key={`link-${linkIndex}`} link={link} />
            ))}
          </ul>
        </div>
      ))}

      <div className='dropMenuCategory__menu'>
        <ul className='dropMenuCategory__menu__linkList'>
          {bottomMenu.map((link, linkIndex) => (
            <LinkItem key={`link-${linkIndex}`} link={link} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CategoryModal = ({
  currentCategory,
  onCloseCategoryModal,
  isOpened,
}) => {
  return (
    <Modal isOpened={isOpened}>
      <DropMenu id='categoryModal' className='dropMenuCategory'>
        <div className='dropMenuCategory__container'>
          {menus.categories.map((categoryData, catIndex) => (
            <Category
              key={`category-${catIndex}`}
              categoryData={categoryData}
              index={catIndex}
              currentCategory={currentCategory}
              onCloseCategoryModal={onCloseCategoryModal}
            />
          ))}
          <AnotherMenu topMenu={menus.topMenu} bottomMenu={menus.bottomMenu} />
        </div>
        <ModalCloseBtn
          type='button'
          aria-label='Modal close button'
          className='dropMenu__btn__modal--close'
          onClick={onCloseCategoryModal}
        >
          <VscClose size={24} />
        </ModalCloseBtn>
      </DropMenu>
    </Modal>
  );
};
