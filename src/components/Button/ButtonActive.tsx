import React, { cloneElement, ElementType, isValidElement } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    align-items: center;
    background-color: #eab676;
    border-radius: 16px;
    box-shadow: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 14px 28px;
    transition: background-color 0.2s ease 0s;
    opacity: 1;
    border: none !important;
    outline: none !important;
    border-radius: 5px;
    &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    };
`;

const ButtonActive = (props) => {
  const { children, } = props;

  return (
    <StyledButton
      {...props}
    >
      <>
        {children}
      </>
    </StyledButton>
  );
};

ButtonActive.defaultProps = {

};

export default ButtonActive;
