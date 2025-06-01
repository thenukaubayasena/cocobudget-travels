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
  }, [isInView, animation]);

  return (
    <Container>
      <BackgroundImage src={bgElement} alt="Scenic background" />
      
      <ContentWrapper>
        <AnimatedText
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="row1"
        >
          <h1>Discover the</h1>
        </AnimatedText>
        
        <AnimatedText
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="row2"
        >
          <h1><Highlight>Heart</Highlight> of <Highlight>Paradise</Highlight>.</h1>
        </AnimatedText>
        
        <StatsWrapper
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        >
          <StatItem>
            <span>50+</span>
            <p>Destinations</p>
          </StatItem>
          <StatItem>
            <span>5+</span>
            <p>Packages</p>
          </StatItem>
        </StatsWrapper>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 5%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 10em; /* Adjust as needed */
  object-fit: cover;
  z-index: 0;
  opacity: 0.4;
  filter: blur(4px) brightness(0.9);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const AnimatedText = styled(motion.div)`
  overflow: hidden;
  
  h1 {
    font-family: "The Seasons", serif;
    font-weight: 300;
    margin: 0;
    line-height: 1.2;
    color: #2d2d2d;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    
    @media (min-width: 768px) {
      font-size: 5rem;
    }
    
    @media (max-width: 767px) {
      font-size: 3rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  
  &.row2 {
    margin-bottom: 2rem;
  }
`;

const Highlight = styled.span`
  color: #4a6b8a;
  font-weight: 400;
`;

const StatsWrapper = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-family: "The Seasons";
    font-size: 3rem;
    color: #4d4d4d;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 1px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1rem;
    color: #666;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export default Banner;