import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

// Import images
import ttImg1 from "../../assets/homeAssets/colombo.png";
import ttImg2 from "../../assets/homeAssets/galle.png";
import ttImg3 from "../../assets/homeAssets/horton.png";
import ttImg4 from "../../assets/homeAssets/adams.png";
import ttImg5 from "../../assets/homeAssets/nuwaraeliya.png";

// Styled Components - Defined in correct order first
const Container = styled.section`
  padding: 5rem 7%;
  background: #f9f9f9;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-family: "The Seasons", serif;
    font-size: clamp(1.8rem, 3vw, 2.75rem);
    font-weight: 300;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .divider {
    height: 2px;
    background: linear-gradient(90deg, var(--primaryColor), transparent);
    max-width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const TourContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  text-align: center;
  z-index: 2;

  h3 {
    font-family: "The Seasons", serif;
    font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    font-weight: 300;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  p {
    font-size: clamp(0.85rem, 1vw, 0.95rem);
    opacity: 0.9;
    line-height: 1.5;
  }
`;

const TourOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%);
`;

const TourImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const TourCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 3/4;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    
    ${TourContent} {
      transform: translateY(0);
    }
  }
`;

// Component Implementation
const ThemeTours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const tours = [
    { img: ttImg1, title: "Colombo", description: "City of Lights" },
    { img: ttImg2, title: "Galle", description: "Heritage Seaside Escape" },
    { img: ttImg3, title: "Horton Plains", description: "Misty Highland Nature Escape" },
    { img: ttImg4, title: "Adam's Peak", description: "Sacred Mountain Pilgrimage" },
    { img: ttImg5, title: "Nuwara Eliya", description: "Cool Mountain Retreat" }
  ];

  return (
    <Container>
      <TitleWrapper>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          Theme Tours
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="divider"
        />
      </TitleWrapper>

      <ToursGrid ref={ref}>
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{
              duration: 0.6,
              delay: 0.4 + (index * 0.1),
              type: "spring"
            }}
          >
            <TourImage>
              <img 
                src={tour.img} 
                alt={tour.title} 
                loading="lazy"
              />
              <TourOverlay />
            </TourImage>
            <TourContent>
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
            </TourContent>
          </TourCard>
        ))}
      </ToursGrid>
    </Container>
  );
};

export default ThemeTours;