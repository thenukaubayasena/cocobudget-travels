import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPhoneAlt, FaFacebook, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <LogoContainer>
          <Logo src={logo} alt="CocoBudget Logo" />
        </LogoContainer>

        <FooterContent>
          <QuickLinks>
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/destinations">Destinations</FooterLink>
            <FooterLink to="/current-packages">Current Packages</FooterLink>
            <FooterLink to="/form">Booking Form</FooterLink>
          </QuickLinks>

          <ContactInfo>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactItem>
              <ContactIcon>
                <IoMail />
              </ContactIcon>
              <ContactText>cocobudget.travels@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhoneAlt />
              </ContactIcon>
              <ContactText>+358 44 245 8212 / +94 70 552 8650</ContactText>
            </ContactItem>
            <SocialLinks>
              <SocialLink href="https://www.instagram.com/cocobudget.travels/" target="_blank" aria-label="Instagram">
                <RiInstagramFill />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/profile.php?id=61577163428909" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </FooterContent>
      </FooterTop>

      <FooterBottom>
        <Copyright>
          &copy; {new Date().getFullYear()} CocoBudget Travels. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: #f8f9fa;
  padding: 2rem 5%;
  border-top: 1px solid #e0e0e0;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Tagline = styled.p`
  color: #666;
  font-weight: 300;
  font-size: 1rem;
  max-width: 250px;
`;

const FooterContent = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 150px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #666;
  font-weight: 300;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.25rem 0;

  &:hover {
    color: var(--primaryColor);
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 200px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  background: var(--primaryColor);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactText = styled.p`
  color: #666;
  font-weight: 300;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  background: var(--primaryColor);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #333;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: #666;
  font-weight: 300;
  font-size: 0.9rem;
`;

export default Footer;