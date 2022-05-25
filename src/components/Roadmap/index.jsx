import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#000000")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const InfoRoad = styled.div`
  display: flex;
  margin: auto;
  height: 860px;
  width: 100%auto;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    flex-direction: column;
    grid-template-areas: "col1" "col2";
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subheading = styled.h2`
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600px;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  align-self: end;
`;

const RoadMap = ({ CONFIG }) => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRoad>
          <Column1>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.ROADMAP_1_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.ROADMAP_1_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.ROADMAP_1_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.ROADMAP_2_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.ROADMAP_2_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.ROADMAP_2_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.ROADMAP_3_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.ROADMAP_3_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.ROADMAP_3_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
          </Column1>
          <Column2>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.ROADMAP_4_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.ROADMAP_4_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.ROADMAP_4_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.ROADMAP_5_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "24px",
                }}
              >
                <Subheading>{CONFIG.ROADMAP_5_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.ROADMAP_5_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
          </Column2>
        </InfoRoad>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default RoadMap;
