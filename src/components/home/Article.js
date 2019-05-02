import React from "react";
import PropTypes from "prop-types";
import { Article } from "../../utils/classes";
import styled from "styled-components";
import { sectionPadding } from "../../utils/cssUtils";

const ArticleWrapper = styled.article`
  display: flex;
  ${sectionPadding}
`;

export const ArticleBox = ({ article }) => (
  <ArticleWrapper>
    {articles.map(article => article.title)}
  </ArticleWrapper>
);

ArticleBox.propTypes = {
  articles: PropTypes.instanceOf(Article).isRequired
};
