import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageWrapper = styled.div`
  ${p => `background-image:url("${p.imgSrc}");`}
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  overflow: hidden;
`;

const StyledImg = styled.img`
  min-height: 100%;
  height: 100%;
  width: auto;
  min-width: 100%;
  opacity: 0;
`;

export const HeroImage = ({ imgSrc, imgAlt }) => (
  <>
    <ImageWrapper imgSrc={imgSrc}>
      <StyledImg src={imgSrc} alt={imgAlt ? imgAlt : " "} />
    </ImageWrapper>
  </>
);

HeroImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};
