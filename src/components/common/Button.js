import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  flex: none;
  box-sizing: border-box;
  appearance: none;
  background: transparent;
  line-height: 40px;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 16px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ddd;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms ease;
  }

  :hover::before {
    opacity: 1;
  }
`;

export const Button = ({ iconClass, ...rest }) => {
  return <ButtonStyled {...rest}><i className={iconClass}/></ButtonStyled>;
};

Button.propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  [`aria-label`]: PropTypes.string,
};
