import React from "react";
import styled from "styled-components";
import { HomePage } from "./components/home/HomePage";
import "./assets/fontello/css/fontello.css";
import { MainHeader } from "./components/common/MainHeader";
import { data } from "./data.js";

const AppContainer = styled.div`
  padding: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedArticleID: undefined
    };
    this.store = data;
  }

  handleBackToHome = () => {
    this.setState({ displayedArticleID: undefined });
  };

  render() {
    return (
      <AppContainer>
        <MainHeader
          articleSelected={!!this.state.displayedArticle}
          handleBackClick={this.handleBackToHome}
        />
        {!this.state.displayedArticleID ? (
          <HomePage tags={this.store.tags} articles={this.store.articles}/>
        ) : (
          <div>{this.state.displayedArticleID}</div>
        )}
      </AppContainer>
    );
  }
}

export default App;
