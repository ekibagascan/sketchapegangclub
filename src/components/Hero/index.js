import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  BuyLink,
} from "./HeroElements";

const Hero = ({ CONFIG }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>{CONFIG.HEADING_HERO}</HeroH1>
          <HeroP>{CONFIG.SUBHEADING_HERO}</HeroP>
          <BuyLink
            href={CONFIG.MARKETPLACE_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Opensea"
          >
            <HeroBtn>{CONFIG.BUTTON_NAME_HERO}</HeroBtn>
          </BuyLink>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
