import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";
import { Button } from "./Button";
import { noop } from "@babel/types";
import PropTypes from "prop-types";

const HeaderStyled = styled.header`
  display: flex;
  height: 40px;
`;

const Logo = styled.img`
  margin-right: auto;
  height: 100%;
  width: auto;
`;

export const MainHeader = ({ articleSelected, handleBackClick }) => (
  <HeaderStyled>
    <nav aria-label={"Main Navigation"}>
      {articleSelected ? (
        <Button
          onClick={handleBackClick}
          iconClass={"icon-left"}
          aria-label={"Back to Home Page"}
        />
      ) : (
        <Button
          onClick={noop}
          iconClass={"icon-menu"}
          aria-label={"Hamburger Menu"}
        />
      )}
    </nav>
    <Logo src={logo} />
    <Button onClick={noop} iconClass={"icon-search"} aria-label={"Search"} />
  </HeaderStyled>
);

MainHeader.propTypes = {
  handleBackClick: PropTypes.func.isRequired,
  articleSelected: PropTypes.bool.isRequired
};
