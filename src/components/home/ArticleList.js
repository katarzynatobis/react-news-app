import React from "react";
import PropTypes from "prop-types";
import { Article } from "../../utils/classes";
import styled from "styled-components";
import {sectionPadding} from "../../utils/cssUtils";

const ArticleListSection = styled.section`
  display: flex;
  ${sectionPadding}
`;

export const ArticleList = ({ articles }) => (
  <ArticleListSection>
    {articles.map(article => article.title)}
  </ArticleListSection>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.instanceOf(Article)).isRequired
};
