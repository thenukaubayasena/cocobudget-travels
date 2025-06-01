import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import sigiriya from "../../assets/homeAssets/sigiriya.jpg";
import maligawa from "../../assets/homeAssets/maligawa.jpg";
import mirissa from "../../assets/homeAssets/mirissa.jpg";
import ella from "../../assets/homeAssets/ella.jpg";
import yala from "../../assets/homeAssets/yala.jpg";

const PopularDestinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const destinations = [
    {
      id: 1,
      image: sigiriya,
      title: "SIGIRIYA",
      description: "Climb the Lion Rock and witness the ancient marvel of Sigiriya, a fortress in the sky, rich with history and breathtaking views.",
      reversed: false,
      link:"https://en.wikipedia.org/wiki/Sigiriya"
    },
    {
      id: 2,
      image: maligawa,
      title: "TEMPLE OF THE TOOTH",
      description: "Home to the sacred tooth relic of Lord Buddha, Sri Dalada Maligawa is a symbol of peace and devotion. A timeless treasure nestled in the heart of Kandy.",
      reversed: true,
      link:"https://en.wikipedia.org/wiki/Temple_of_the_Tooth"
    },
    {
      id: 3,
      image: mirissa,
      title: "MIRISSA",
      description: "Mirissa, a tropical paradise on Sri Lanka's south coast, offers golden beaches and crystal-clear waters. It's the perfect spot for whale watching, surfing, and sunset dreams.",
      reversed: false,
      link:"https://en.wikipedia.org/wiki/Mirissa"
    },
    {
      id: 4,
      image: ella,
      title: "ELLA",
      description: "Ella is a charming mountain village in Sri Lanka, known for its lush tea plantations and breathtaking views. Hike to Ella Rock or stroll across the iconic Nine Arches Bridge for unforgettable adventures.",
      reversed: true,
      link:"https://en.wikipedia.org/wiki/Ella,_Sri_Lanka"
    },
    {
      id: 5,
      image: yala,
      title: "YALA",
      description: "Yala National Park is Sri Lanka's premier wildlife sanctuary, home to leopards, elephants, and exotic birds. Explore its rugged terrain and spot incredible wildlife on an unforgettable safari adventure.",
      reversed: false,
      link:"https://en.wikipedia.org/wiki/Yala_National_Park"
    }
  ];

  return (
    <Container>
      <TitleContainer>
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          Popular Destinations
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </TitleContainer>

      <DestinationsContainer>
        {destinations.map((destination, index) => (
          <DestinationItem 
            key={destination.id}
            className={destination.reversed ? "reversed" : ""}
            initial="hidden"
            animate={animation}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 + (index * 0.1),
              type: "spring" 
            }}
          >
            <ImageWrapper>
              <DestinationImage 
                src={destination.image} 
                alt={destination.title}
                loading="lazy"
              />
              <Overlay />
            </ImageWrapper>
            
            <ContentWrapper>
              <h2>{destination.title}</h2>
              <p>{destination.description}</p>
              <ExploreButton 
                as="a" 
                href={destination.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                EXPLORE {destination.title.split(" ")[0]}
              </ExploreButton>
            </ContentWrapper>
          </DestinationItem>
        ))}
      </DestinationsContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 0;
  background: linear-gradient(to bottom, #f9f9f9 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
`;

const TitleContainer = styled.div`
  padding: 0 7%;
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-family: "The Seasons", serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 300;
    color: #333;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  hr {
    width: 50%;
    max-width: 200px;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--primaryColor), transparent);
    border: none;
    margin: 0 auto;
  }
`;

const DestinationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 5%;
`;

const DestinationItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  background: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &.reversed {
    flex-direction: row-reverse;
  }

  @media (max-width: 900px) {
    flex-direction: column !important;
    gap: 1.5rem;
    padding-bottom: 2rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-height: 350px;
  position: relative;
  overflow: hidden;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    min-height: 200px;
    width: 100%;
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block; /* Remove extra space below image */

  ${DestinationItem}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    height: 50vh; // 50% of the viewport height
  }

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-family: "The Seasons", serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--primaryColor);
    letter-spacing: 3px;
    font-weight: 300;
    margin: 0;
  }

  p {
    color: #555;
    line-height: 1.7;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    margin: 0;
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    padding: 0 2rem;

    h2 {
      text-align: center;
    }
  }
`;

const ExploreButton = styled.button`
  align-self: flex-start;
  background: transparent;
  color: var(--primaryColor);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--primaryColor);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--primaryColor);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    &:before {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    align-self: center;
  }
`;

export default PopularDestinations;