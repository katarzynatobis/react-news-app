import React from "react";
import PropTypes from "prop-types";
import { Article } from "../../utils/classes";
import { HeroImage } from "../common/HeroImage";
import styled from "styled-components";

const ArticleWrapper = styled.article`
  opacity: 0;
  transform: translateY(50px);
  transition: all 300ms ease-out;

  &.mounted {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Categories = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  margin: 10px 0;
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-family: "Lora", serif;
  font-style: italic;
  font-weight: 700;
  margin: 10px 0;
`;

const SubTitle = styled.p`
  font-family: "Lora", serif;
  margin: 10px 0;
  color: #aaa;
`;

const ArticleFooter = styled.footer`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  ${p => `background-image:url("${p.src}")`};
  background-position: center;
  background-size: cover;
`;

const Author = styled.div`
  margin-left: 20px;
  font-size: 18px;
  color: #555;

  & a {
    color: black;
    text-decoration-color: #ccc;
    font-family: "Lora", serif;
    font-weight: 700;
  }
`;

export class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }), 200);
  }

  render() {
    const {
      img,
      category,
      subcategory,
      title,
      subtitle,
      author,
      text
    } = this.props.article;

    return (
      <ArticleWrapper className={this.state.mounted ? "mounted" : ""}>
        <HeroImage imgSrc={img} />
        <Categories>
          {category} - {subcategory}
        </Categories>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <ArticleFooter>
          <Avatar src={author.avatar} />
          <Author>
            by <a href={`mailto:${author.email}`}>{author.name}</a>
          </Author>
        </ArticleFooter>
        {text.map(paragraph => (
          <p key={paragraph.slice(0, 5)}>{paragraph}</p>
        ))}
      </ArticleWrapper>
    );
  }
}

ArticlePage.propTypes = {
  article: PropTypes.instanceOf(Article).isRequired
};
