import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const services = [
    {
      title: "Destination Discovery",
      description: "Explore cities and regions with key highlights for places like Kandy, Galle, Nuwara Eliya, Jaffna, and more."
    },
    {
      title: "Travel Planner",
      description: "Customizable trip planner tailored to user preferences such as nature, budget, and travel dates."
    },
    {
      title: "Tour & Activity Booking",
      description: "Book local tours, safaris, train rides, hiking guides, temple visits, and more with real-time availability and pricing."
    },
    {
      title: "Accommodation Finder",
      description: "Browse hotels, guesthouses, eco-lodges, and homestays. Filter by budget, rating, and location."
    },
    {
      title: "Transport Services",
      description: "Access airport transfers, taxi and tuk-tuk bookings, train schedules and reservations, and car rentals."
    },
    {
      title: "Local Food & Dining Guide",
      description: "Discover recommended restaurants and street food spots. Filter by cuisine or region, with ratings and user reviews."
    },
    {
      title: "Events & Festivals Calendar",
      description: "Stay updated on upcoming cultural events, festivals, and religious observances."
    }
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
          What Services We Provide
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

      <ServicesGrid ref={ref}>
        {services.map((service, index) => (
          <ServiceCard
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
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  );
};

// Styled Components
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
  margin-bottom: 3rem;
  text-align: center;

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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-color: var(--primaryColor);

    .icon {
      transform: translateX(5px);
      color: var(--primaryColor);
    }
  }

  h3 {
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    font-weight: 500;
    color: var(--primaryColor);
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  p {
    font-size: clamp(0.85rem, 1vw, 0.95rem);
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .icon {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    color: #ccc;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

export default Services;