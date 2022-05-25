import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";

const Info = ({
  lightBg,
  id,
  imgStart,
  lightText,
  darkText,
  alt,
  img,
  CONFIG,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{CONFIG.ABOUT_HEADING}</Heading>
                <Subtitle darkText={darkText}>
                  {CONFIG.ABOUT_DESCRIPTION}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src="/Config/images/gif.gif" alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
