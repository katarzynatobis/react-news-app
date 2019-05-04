import React from "react";
import PropTypes from "prop-types";
import { Tags } from "./Tags";
import { HeroImage } from "../common/HeroImage";
import { ArticleList } from "./ArticleList";
import { Article } from "../../utils/classes";
import { visuallyHidden } from "../../utils/cssUtils";
import styled from "styled-components";

const VisuallyHiddenH2 = styled.h2`
  ${visuallyHidden}
`;

export const HomePage = ({ articles, tags, handleArticleClick }) => {
  return (
    <>
      <Tags tags={tags} />
      <HeroImage imgSrc={articles[0].img} />
      <VisuallyHiddenH2> List of articles </VisuallyHiddenH2>
      <ArticleList
        articles={articles}
        handleArticleClick={handleArticleClick}
      />
    </>
  );
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.instanceOf(Article)).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleArticleClick: PropTypes.func.isRequired
};
