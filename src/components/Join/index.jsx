import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  SocialIcons,
  SocialIconLink,
  Heading,
  Subtitle,
} from "./InfoElements";
import { Grid } from "@mui/material";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

const Join = ({ lightBg, id, imgStart, alt, img, CONFIG }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <ImgWrap>
                <Img src="/Config/images/join.png" alt={alt} />
              </ImgWrap>
            </Column1>
            <Column2>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Heading>{CONFIG.COMMUNITY_HEADING}</Heading>
                <Subtitle>{CONFIG.COMMUNITY_DESCRIPTIONS}</Subtitle>
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
                      height={50}
                    />
                  </SocialIconLink>
                </SocialIcons>
              </Grid>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Join;
