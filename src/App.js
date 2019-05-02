import React from "react";
import styled from "styled-components";
import { HomePage } from "./components/home/HomePage";
import "./assets/fontello/css/fontello.css";
import { MainHeader } from "./components/common/MainHeader";
import { data } from "./data.js";
import { Article } from "./utils/classes";

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
    return (
      <AppContainer>
        <MainHeader
          articleSelected={!!this.state.displayedArticleID}
          handleBackClick={this.handleBackToHome}
        />
        {!this.state.displayedArticleID ? (
          <HomePage
            tags={this.tags}
            articles={this.articles}
            handleArticleClick={this.handleArticleClick}
          />
        ) : (
          <div>{this.state.displayedArticleID}</div>
        )}
      </AppContainer>
    );
  }
}

export default App;
