import React from "react";
import Carousel from "react-elastic-carousel";
import { Item } from "./GalleryElements";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Gallery = () => {
  return (
    <>
      <div className="Gallery">
        <Carousel breakPoints={breakPoints} enableAutoPlay={true}>
          <Item>
            <img src="/Config/images/img1.png" alt="img1" />
          </Item>
          <Item>
            <img src="/Config/images/img2.png" alt="img2" />
          </Item>
          <Item>
            <img src="/Config/images/img3.png" alt="img3" />
          </Item>
          <Item>
            <img src="/Config/images/img4.png" alt="img4" />
          </Item>
          <Item>
            <img src="/Config/images/img5.png" alt="img5" />
          </Item>
          <Item>
            <img src="/Config/images/img6.png" alt="img6" />
          </Item>
          <Item>
            <img src="/Config/images/img7.png" alt="img7" />
          </Item>
          <Item>
            <img src="/Config/images/img8.png" alt="img8" />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
