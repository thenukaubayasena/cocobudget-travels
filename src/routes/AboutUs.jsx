import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import aboutUsImage from '../assets/homeAssets/aboutus.jpg'; 
import missionImage from '../assets/homeAssets/mission.jpg';
import valuesImage from '../assets/homeAssets/values.jpg';
import kasunImage from '../assets/homeAssets/member.png'; 
import harshaniImage from '../assets/homeAssets/member1.png';
import harendraImage from '../assets/homeAssets/member2.png';


const AboutUs = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Story</h1>
          <p className="subtitle">Discover the passion behind CocoBudget Travels</p>
        </motion.div>
      </HeroSection>

      {/* About Section */}
      <Section>
        <ContentWrapper>
          <TextContent>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Founded in 2025, CocoBudget Travels began as a small team of Sri Lanka travel enthusiasts 
              with a shared vision: to make authentic Sri Lankan experiences accessible to everyone. 
              What started as a passion project has grown into a trusted travel company serving thousands 
              of happy travelers each year.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our team consists of local experts, experienced guides, and travel professionals who 
              are deeply connected to Sri Lanka's culture and landscapes. We're not just tour operators - 
              we're storytellers, adventure-seekers, and your personal connection to the real Sri Lanka.
            </motion.p>
          </TextContent>
        </ContentWrapper>
      </Section>

      {/* Mission Section */}
      <ColoredSection>
        <ContentWrapper reversed>
          <TextContent>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              To provide unforgettable travel experiences that showcase the best of Sri Lanka while 
              maintaining sustainable and responsible tourism practices. We believe travel should be:
            </motion.p>
            <MissionList>
              {[
                "Authentic - real local experiences",
                "Affordable - value for money",
                "Sustainable - eco-friendly practices",
                "Personalized - tailored to your interests"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Checkmark>✓</Checkmark> {item}
                </motion.li>
              ))}
            </MissionList>
          </TextContent>
          <ImageWrapper>
            <img 
              src={missionImage} 
              alt="Our Mission" 
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </ImageWrapper>
        </ContentWrapper>
      </ColoredSection>

      {/* Values Section */}
      <Section>
        <ContentWrapper>
          <TextContent>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              At CocoBudget Travels, our core values guide everything we do:
            </motion.p>
            <ValuesGrid>
              {[
                {
                  title: "Local Expertise",
                  description: "Our team consists of Sri Lanka natives who know every hidden gem and cultural insight."
                },
                {
                  title: "Customer First",
                  description: "Your satisfaction and safety are our top priorities at every step of your journey."
                },
                {
                  title: "Sustainable Travel",
                  description: "We partner with eco-friendly accommodations and promote responsible tourism."
                },
                {
                  title: "Authentic Experiences",
                  description: "We go beyond tourist spots to show you the real Sri Lanka."
                }
              ].map((value, index) => (
                <ValueCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </ValuesGrid>
          </TextContent>
          <ImageWrapper>
            <img
              src={valuesImage}
              alt="Our Mission"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </ImageWrapper>
        </ContentWrapper>
      </Section>

      {/* Team Section */}
      <ColoredSection>
        <SectionTitle>Meet Our Team</SectionTitle>
        <TeamGrid>
          {[
            {
              name: "Mr. Kasun Liyanage",
              role: "Founder & CEO - Marketing and Operations in Finland ",
              email: "(cocobudget.travels@gmail.com)",
              image: kasunImage
            },
            {
              name: "Mrs. Harshani Athapaththu",  
              role: "Sri Lankan Agent",
              email: "(harshani93athapaththu@gmail.com)",
              image: harshaniImage
            },
            {
              name: "Mr. Harendra Gunawardane",  
              role: "Event Organizer",
              email: "(+94 77 613 4822)",
              image: harendraImage
            }
          ].map((member, index) => (
            <TeamMember
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <TeamImage $image={member.image} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.email}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </ColoredSection>

      {/* Contact Section */}
      <Section>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <ContactCard>
              <FaPhone className="icon" />
              <h3>Phone</h3>
              <p>+358 44 245 8212</p>
              <p>+94 70 552 8650</p>
            </ContactCard>
            <ContactCard>
              <FaEnvelope className="icon" />
              <h3>Email</h3>
              <p>cocobudget.travels@gmail.com</p>
            </ContactCard>
            <ContactCard>
              <FaMapMarkerAlt className="icon" />
              <h3>Address</h3>
              <p>Kauppalankatu 14, A 14, 05800 Hyvinkaa, Finland</p>
            </ContactCard>
            <ContactCard>
              <FaClock className="icon" />
              <h3>Office Hours</h3>
              <p>Mon-Fri: 9AM - 6PM</p>
              <p>Sat: 9AM - 1PM</p>
            </ContactCard>
          </ContactInfo>
          
          <SocialLinks>
            <h3>Follow Us</h3>
            <SocialIcons>
              <a href="https://www.instagram.com/cocobudget.travels/" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577163428909" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </SocialIcons>
          </SocialLinks>
        </ContactGrid>
      </Section>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 5%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
                url(${aboutUsImage});
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.9);
    z-index: 1;
    opacity: 0.9;
  }

  /* Ensures content stays above the blurred image */
  * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-family: "The Seasons", serif;
    font-weight: 300;
    margin: 0;
    line-height: 1.2;
    color:rgb(255, 255, 255);
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

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 300;
    max-width: 700px;
    margin: 0 auto;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 0 2rem;
  }
`;


const Section = styled.section`
  padding: 5rem 8%;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ColoredSection = styled(Section)`
  background-color: #f8f9fa;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  ${props => props.reversed && `flex-direction: row-reverse;`}

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;

  h2 {
    font-family: "The Seasons", serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 300;
    color: #333;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  p {
    font-size: clamp(1rem, 1.1vw, 1.1rem);
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    
    p {
      font-size: 1rem;
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 10 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 600px;
  }
`;

const MissionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    font-size: clamp(1rem, 1.1vw, 1.1rem);
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    color: #555;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: left;
    padding-left: 1rem;
  }
`;

const Checkmark = styled.span`
  color: var(--primaryColor);
  margin-right: 12px;
  font-weight: bold;
  flex-shrink: 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-color: var(--primaryColor);
  }

  h3 {
    color: var(--primaryColor);
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
    color: #555;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-family: "The Seasons", serif;
  color: #333;
  margin-bottom: 3rem;
  font-weight: 300;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 350px;
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }

  h3 {
    color: var(--primaryColor);
    margin: 1.5rem 0 0.5rem;
    font-size: 1.3rem;
  }

  .role {
    font-weight: 600;
    color: #555;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    color: #666;
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.6;
  }
`;

const TeamImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 1px 8px rgba(0,0,0,0.1);
  background: url(${props => props.$image}) center/cover no-repeat;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .icon {
    color: var(--primaryColor);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  text-align: center;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: "The Seasons", serif;
    font-weight: 300;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    background: var(--primaryColor);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background: #333;
    }
  }
`;

export default AboutUs;