import React from "react";
import PropTypes from "prop-types";
import { Article } from "../../utils/classes";
import styled from "styled-components";
import { ArticleBox } from "../home/ArticleBox";

const ArticleListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  justify-content: space-between;
`;

export const ArticleList = ({ articles, handleArticleClick }) => {

  return (
    <ArticleListSection aria-label={"List of articles"}>
      {articles.map(article => (
        <ArticleBox
          key={article.id}
          article={article}
          onClick={handleArticleClick}
        />
      ))}
    </ArticleListSection>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.instanceOf(Article)).isRequired,
  handleArticleClick: PropTypes.func.isRequired
};
