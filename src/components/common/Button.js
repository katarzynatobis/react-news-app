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
  overflow: hidden;
  ${hoverBackground}
`;

const IStyled = styled.i`
  display: inline-block;
  transition: transform 0ms ease-in-out;

  &.clicked {
    transform: rotate(360deg);
    transition-duration: 300ms;
  }
`;

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: true });
    console.log("handle click");
    setTimeout(() => {
      this.props.onClick();
      this.setState({ clicked: false });
    }, 350);
  };

  render() {
    const { iconClass, onClick, className, ...rest } = this.props;
    const clickedClassName = this.state.clicked ? " clicked" : "";
    return (
      <ButtonStyled onClick={this.handleClick} {...rest}>
        <IStyled className={iconClass + clickedClassName} />
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  [`aria-label`]: PropTypes.string
};
