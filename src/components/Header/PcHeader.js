import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TopHeader } from "./TopHeader";
import { HeaderDropMenu } from "./HeaderDropMenu";
import { HeaderTools } from "./HeaderTools";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLogo } from "./HeaderLogo";
import { CategoryModal } from "./CategoryModal";

const PcHeaderContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  .header__container {
    height: ${(props) => props.height}px;
  }

  .header__inner {
    line-height: unset;
    height: fit-content;
  }
`;

export const PcHeader = () => {
  const [fixMode, setFixMode] = useState("top");
  const [isCategoryModalOpened, setIsCategoryModalOpened] = useState();
  const [currentCategory, setCurrentCategory] = useState();

  const changeCategoryModalHandler = (selectedCategory) => {
    if (currentCategory === selectedCategory) {
      closeCategoryModalHandler();
    } else {
      setIsCategoryModalOpened(true);
      setCurrentCategory(selectedCategory);
    }
  };

  const closeCategoryModalHandler = () => {
    setIsCategoryModalOpened(false);
    setCurrentCategory(null);
  };

  useEffect(() => {
    if (isCategoryModalOpened) {
      document.querySelector("body").classList.add("modal-is-opened");
    } else {
      document.querySelector("body").classList.remove("modal-is-opened");
    }
  }, [isCategoryModalOpened]);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      if (scrollY === 0) {
        // top
        setFixMode("top");
      } else if (scrollY > lastScrollY) {
        // down
        if ((scrollY > 0) & (scrollY < 70)) {
          setFixMode("wait");
        } else {
          setFixMode("down");
        }
      } else {
        // up
        setFixMode("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const scrollEvent = window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    });

    return () => {
      window.document.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <PcHeaderContainer className='pc-header' height={120}>
      <header className='header'>
        <div className='header__container'>
          <div className='header__inner' data-fixmode={fixMode}>
            <TopHeader />

            <div className='header__nav'>
              <HeaderLogo />
              <HeaderDropMenu
                currentCategory={currentCategory}
                onChangeCategory={changeCategoryModalHandler}
              />
              <HeaderSearch />
              <HeaderTools />
            </div>
          </div>
        </div>
      </header>
      <CategoryModal
        isOpened={isCategoryModalOpened}
        currentCategory={currentCategory}
        onCloseCategoryModal={closeCategoryModalHandler}
      />
    </PcHeaderContainer>
  );
};
