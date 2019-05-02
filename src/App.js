import React from "react";
import styled from "styled-components";
import { HomePage } from "./components/home/HomePage";
import "./assets/fontello/css/fontello.css";
import { MainHeader } from "./components/common/MainHeader";

const AppContainer = styled.div`
  padding: 20px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayedArticleID: undefined
    };
  }

  handleBackToHome = () => {
    this.setState({ displayedArticle: undefined });
  };

  render() {
    return (
      <AppContainer>
        <MainHeader
          articleSelected={!!this.state.displayedArticle}
          handleBackClick={this.handleBackToHome}
        />
        {!this.state.displayedArticle ? (
          <HomePage />
        ) : (
          <div>{this.state.displayedArticle}</div>
        )}
      </AppContainer>
    );
  }
}

export default App;
