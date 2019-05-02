import React from "react";
import PropTypes from "prop-types";
import { Tags } from "./Tags";
import { HeroImage } from "./HeroImage";

export const HomePage = ({ articles, tags }) => (
  <>
    <Tags tags={tags} />
    <HeroImage imgSrc={articles["1"].img} />
  </>
);

HomePage.propTypes = {
  articles: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
};
