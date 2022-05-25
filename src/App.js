import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Info from "./components/Info";
import { homeObjOne } from "./components/Info/Data";
import { joinObjOne } from "./components/Join/Data";
import Feature from "./components/Feature";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import RoadMap from "./components/Roadmap";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [CONFIG, SET_CONFIG] = useState({
    HEADING_HERO: "",
    SUBHEADING_HERO: "",
    MARKETPLACE_LINK: "",
    BUTTON_NAME_HERO: "",
    ABOUT_HEADING: "",
    ABOUT_DESCRIPTION: "",
    FEATURE_HEADING: "",
    FEATURE_SUBHEADING: "",
    FEATURE_BUTTON_NAME: "",
    COMMUNITY_HEADING: "",
    COMMUNITY_DESCRIPTIONS: "",
    ROADMAP_1_HEADING: "",
    ROADMAP_1_SUBHEADING: "",
    ROADMAP_1_DESCRIPTIONS: "",
    ROADMAP_2_HEADING: "",
    ROADMAP_2_SUBHEADING: "",
    ROADMAP_2_DESCRIPTIONS: "",
    ROADMAP_3_HEADING: "",
    ROADMAP_3_SUBHEADING: "",
    ROADMAP_3_DESCRIPTIONS: "",
    ROADMAP_4_HEADING: "",
    ROADMAP_4_SUBHEADING: "",
    ROADMAP_4_DESCRIPTIONS: "",
    ROADMAP_5_HEADING: "",
    ROADMAP_5_SUBHEADING: "",
    ROADMAP_5_DESCRIPTIONS: "",
    FOOTER_HEADING: "",
    INSTAGRAM_LINK: "",
    DISCORD_LINK: "",
    TWITTER_LINK: "",
  });

  const getConfig = async () => {
    const configResponse = await fetch("/Config/Config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Hero CONFIG={CONFIG} />
      <Info {...homeObjOne} CONFIG={CONFIG} />
      {/* <Feature CONFIG={CONFIG} /> */}
      <Gallery />
      <Join {...joinObjOne} CONFIG={CONFIG} />
      <RoadMap CONFIG={CONFIG} />
      <Footer CONFIG={CONFIG} />
    </Router>
  );
}

export default App;
