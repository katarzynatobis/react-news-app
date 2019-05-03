import React from "react";
import styled from "styled-components";
import { HomePage } from "./components/home/HomePage";
import "./assets/fontello/css/fontello.css";
import { MainHeader } from "./components/common/MainHeader";
import { data } from "./data.js";
import { Article } from "./utils/classes";
import { ArticlePage } from "./components/articlePage/ArticlePage";

const AppContainer = styled.div`
  padding: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedArticleID: undefined
    };
    this.tags = data.tags;
    this.articles = data.articles.map(article => new Article(article));
  }

  handleBackToHome = () => {
    this.setState({ displayedArticleID: undefined });
  };

  handleArticleClick = displayedArticleID => {
    this.setState({ displayedArticleID });
  };

  render() {
    const articleToDisplay =
      this.state.displayedArticleID &&
      this.articles.find(
        article => article.id === this.state.displayedArticleID
      );
    return (
      <AppContainer>
        <MainHeader
          articleSelected={!!this.state.displayedArticleID}
          handleBackClick={this.handleBackToHome}
        />
        {!articleToDisplay ? (
          <HomePage
            tags={this.tags}
            articles={this.articles}
            handleArticleClick={this.handleArticleClick}
          />
        ) : (
          <ArticlePage article={articleToDisplay} />
        )}
      </AppContainer>
    );
  }
}

export default App;
