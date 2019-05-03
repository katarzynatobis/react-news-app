import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { hoverBackground, sectionPadding } from "../../utils/cssUtils";

const MainWrapper = styled.section`
  position: relative;
  margin: 0 -20px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25px;
    background-image: linear-gradient(to right, transparent, white);
  }
`;

const TagsContainer = styled.div`
  overflow-x: auto;
  ${sectionPadding}
  white-space: nowrap;
`;

const StyledTag = styled.a`
  margin-left: 20px;
  text-transform: capitalize;
  padding: 5px;
  font-size: 14px;
  ${hoverBackground}

  :last-child {
    margin-right: 20px;
  }

  ::before {
    content: "#";
  }
`;

export const Tags = ({ tags }) => (
  <MainWrapper>
    <TagsContainer>
      {tags.map(tag => (
        <StyledTag key={tag} src="#">
          {tag}
        </StyledTag>
      ))}
    </TagsContainer>
  </MainWrapper>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};
