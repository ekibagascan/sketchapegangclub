import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = ({ CONFIG }) => {
  return (
    <FeatureContainer>
      <h1>{CONFIG.FEATURE_HEADING}</h1>
      <p>{CONFIG.FEATURE_SUBHEADING}</p>
      <a
        href={CONFIG.MARKETPLACE_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Opensea"
      >
        <FeatureButton>{CONFIG.FEATURE_BUTTON_NAME}</FeatureButton>
      </a>
    </FeatureContainer>
  );
};

export default Feature;
