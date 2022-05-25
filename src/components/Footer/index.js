import React from "react";
import { FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = ({ CONFIG }) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">{CONFIG.FOOTER_HEADING}</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href={CONFIG.DISCORD_LINK}
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.INSTAGRAM_LINK}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.TWITTER_LINK}
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.MARKETPLACE_LINK}
                target="_blank"
                aria-label="Opensea"
              >
                <img
                  src="/Config/images/opensea.svg"
                  alt="opensea"
                  height={25}
                />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
