import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bgElement from "../../assets/homeAssets/banner.jpg";
import { motion, useAnimation, useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <img className="bgElement" src={bgElement} alt="" />
      <motion.div
        className="row1"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
      >
        <h1>Discover the</h1>
      </motion.div>
      <motion.div
        className="row2"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
      >
        <h1>Heart of Paradise.</h1>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  position: relative;
  overflow: hidden;
  .bgElement {
    position: absolute;
    width: 100%;
    margin-top: 12em;
    z-index: 0;
    opacity: 0.5;
    filter: blur(1px);
  }
  div {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    img {
      width: 44%;
    }
    h1 {
      font-family: "The Seasons", serif;
      letter-spacing: 2px;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
      font-size: 7vw;
      font-weight: 100;
    }
  }
  @media (max-width: 700px) {
    .bgElement {
      width: 100%;
    }
    div {
      h1 {
        font-size: 13vw;
      }
    }
    .row2,
    .row1 {
      h1 {
        font-size: 15vw;
      }
    }
  }
  @media (max-width: 610px) {
    .row2 {
      h1 {
        font-size: 15vw;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 5em 7%;
    .row1 {
      flex-direction: column;
      align-items: flex-start;
      h1 {
        font-size: 18vw;
      }
    }
  }
`;

export default Banner;