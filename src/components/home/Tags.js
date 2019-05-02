import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { hoverBackground } from "../../utils/cssUtils";

const TagsContainer = styled.section`
  overflow-x: auto;
  padding: 10px 0;
  white-space: nowrap;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40px;
    background-image: linear-gradient(to right, transparent, white);
  }
`;

const StyledTag = styled.a`
  margin-left: 25px;
  text-transform: capitalize;
  padding: 5px;
  font-size: 14px;
  ${hoverBackground}

  ::before {
    content: "#";
  }
`;

export const Tags = ({ tags }) => (
  <TagsContainer>
    {tags.map(tag => (
      <StyledTag src="#">{tag}</StyledTag>
    ))}
  </TagsContainer>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};
