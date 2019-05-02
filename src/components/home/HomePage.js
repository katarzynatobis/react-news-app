import React from "react";
import PropTypes from "prop-types";
import { Tags } from "./Tags";
import { HeroImage } from "./HeroImage";
import { ArticleList } from "./ArticleList";
import { Article } from "../../utils/classes";

export const HomePage = ({ articles, tags, handleArticleClick }) => {
  const heroImageIndex = Math.floor(Math.random() * articles.length);
  return (
    <>
      <Tags tags={tags} />
      <HeroImage imgSrc={articles[heroImageIndex].img} />
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
