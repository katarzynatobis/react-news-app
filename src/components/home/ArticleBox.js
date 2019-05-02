import React from "react";
import PropTypes from "prop-types";
import { Article } from "../../utils/classes";
import styled from "styled-components";

const ArticleWrapper = styled.article`
  margin: 5px 10px;
  width: 100%;
  height: 150px;

  @media screen and (min-width: 800px) {
    width: calc(50% - 20px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(33.33% - 20px);
  }
`;

const ArtButton = styled.button`
  width: 100%;
  height: 100%;
  padding: none;
  appearance: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  transition: opacity 300ms ease;
  border: none;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  font-family: "Open Sans", "Helvetica Neue", "Arial", sans-serif;

  :hover {
    opacity: 0.7;
  }
`;

const ImgThumbnail = styled.div`
  height: 100px;
  width: 100px;
  flex: none;
  ${p => `background-image:url("${p.imgThumbnail}")`};
  background-position: center;
  background-size: cover;
  align-self: center;

  @media screen and (min-width: 800px) {
    width: 130px;
    height: 130px;
  }
`;

const ArticleInfo = styled.div`
  margin-right: 5px;
`;

const Subcategory = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
`;

const HrStyled = styled.hr`
  border-top: 1px dotted #ccc;
  width: 100%;
  margin: 5px 0;
`;

const H3ArticleTitle = styled.h3`
  font-size: 20px;
`;

export const ArticleBox = ({ article, onClick }) => {
  const { title, id } = article;

  const shortTitle = title.length > 35 ? title.slice(0, 35) + "..." : title;

  const onArticleClick = () => onClick(id);

  return (
    <>
      <ArticleWrapper>
        <ArtButton onClick={onArticleClick} type={"button"}>
          <ArticleInfo>
            <Subcategory>{article.subcategory}</Subcategory>
            <H3ArticleTitle>{shortTitle}</H3ArticleTitle>
          </ArticleInfo>
          <ImgThumbnail imgThumbnail={article.imgThumbnail} />
        </ArtButton>
        <HrStyled />
      </ArticleWrapper>
    </>
  );
};

ArticleBox.propTypes = {
  article: PropTypes.instanceOf(Article).isRequired,
  onClick: PropTypes.func.isRequired
};
