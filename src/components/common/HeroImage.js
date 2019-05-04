import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 170px;

  @media screen and (min-width: 800px) {
    height: 400px;
  }
`;

const ImageContainer = styled.div`
  transition: all 500ms ease-out;
  background: rgba(255, 255, 255, 0.7);
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;

  &.big-img {
    height: calc(100vh - 70px);
    width: 100vw;
    margin-left: -20px;
    margin-right: -20px;
    transition-timing-function: ease-in;

    & img {
      transform: translateY(-35px);
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  transition: transform 500ms ease;
`;

export class HeroImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgEnlarged: false
    };
  }

  handleClick = () => this.setState({ imgEnlarged: !this.state.imgEnlarged });

  render() {
    const { imgSrc, imgAlt } = this.props;
    return (
      <ImageWrapper imgSrc={imgSrc} onClick={this.handleClick}>
        <ImageContainer className={this.state.imgEnlarged ? "big-img" : ""}>
          <StyledImg src={imgSrc} alt={imgAlt ? imgAlt : " "} />
        </ImageContainer>
      </ImageWrapper>
    );
  }
}

HeroImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};
