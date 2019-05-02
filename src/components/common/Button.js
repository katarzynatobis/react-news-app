import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { hoverBackground } from "../../utils/cssUtils";

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
  font-size: 16px;
  ${hoverBackground}
`;

export const Button = ({ iconClass, ...rest }) => {
  return (
    <ButtonStyled {...rest}>
      <i className={iconClass} />
    </ButtonStyled>
  );
};

Button.propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  [`aria-label`]: PropTypes.string
};
