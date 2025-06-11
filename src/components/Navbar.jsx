import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when navigating
    setIsOpen(false);
    
    // Set active tab based on pathname
    const path = location.pathname.split('/')[1] || 'home';
    setActiveTab(path);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContainer>
      <LogoLink to="/">
        <Logo src={logo} alt="Company Logo" />
      </LogoLink>

      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <NavMenu isOpen={isOpen}>
        <NavItem to="/" $isActive={activeTab === "home"}>
          Home
        </NavItem>
        <NavItem to="/about-us" $isActive={activeTab === "about-us"}>
          About Us
        </NavItem>
        <NavItem to="/destinations" $isActive={activeTab === "destinations"}>
          Destinations
        </NavItem>
        <NavItem to="/current-packages" $isActive={activeTab === "current-packages"}>
          Current Packages
        </NavItem>
        <NavItem to="/form" $isActive={activeTab === "form"}>
          Booking Form
        </NavItem>
      </NavMenu>

      <Overlay isOpen={isOpen} onClick={toggleMenu} />
    </NavContainer>
  );
};

// Styled Components
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoLink = styled(Link)`
  z-index: 1001;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 35px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  color: ${({ $isActive }) => ($isActive ? 'var(--primaryColor)' : '#333')};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primaryColor);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: var(--primaryColor);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;
  color: #333;
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Navbar;