import React from "react";
import { menus } from "../../data";

export const HeaderDropMenu = ({ onChangeCategory, currentCategory }) => {
  return (
    <div className='headerDropMenu'>
      <ul className='headerDropMenu__list'>
        {menus.categories.map((category, index) => (
          <li className='headerDropMenu__list__item' key={`category-${index}`}>
            <button
              id={`tabButton${index}`}
              type='button'
              tabIndex='0'
              aria-label={`${category.text}のカテゴリーメニューを開く`}
              className={`headerDropMenu__btn dropMenuCategory__${index} ${
                currentCategory === category.text &&
                "headerDropMenu__btn--current"
              }`}
              onClick={() => onChangeCategory(category.text)}
            >
              {category.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
