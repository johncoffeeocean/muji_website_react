import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
  position: fixed;
  z-index: 120;
  top: 120px;
  display: none;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;

  &.modal-is-opened {
    display: block;
    position: fixed;
    top: 120px;
    z-index: 120;
  }
  &.modal-is-opened {
    animation: modalFadeIn 0.2s ease forwards;
  }
  &.modal-is-closed {
    animation: modalFadeOut 0.2s ease forwards;
  }

  .modal-overlay {
    top: 71px;
    width: 100%;
    position: absolute;
    height: 1000%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal-overlay.modal-is-opened {
    animation: modalFadeIn 0.2s ease forwards;
  }

  .modal-overlay.modal-is-closed {
    animation: modalFadeOut 0.2s ease forwards;
  }

  .modal__inner {
    @media screen and (min-width: 1024px) {
      position: relative;
      width: 100%;
      text-align: left;
      background-color: #fff;
    }
  }

  .modal__container {
    overflow-y: auto;

    @media screen and (min-width: 1024px) {
      position: relative;
      max-height: calc(100vh - 56px);
      max-height: calc(var(--vh, 1vh) * 90 - 56px);
    }
  }
`;

export const Modal = ({ isOpened, children }) => {
  return (
    <ModalStyle
      className={`modal ${isOpened ? "modal-is-opened" : "modal-is-closed"}`}
    >
      <div
        className={`modal-overlay ${
          isOpened ? "modal-is-opened" : "modal-is-closed"
        }`}
      />

      <div className='modal__inner'>
        <div className='modal__container'>{children}</div>
      </div>
    </ModalStyle>
  );
};
