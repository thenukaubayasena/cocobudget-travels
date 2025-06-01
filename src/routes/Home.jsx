import React from "react";
import styled from "styled-components";
import Banner from "../components/homeComponents/Banner";
import PopularDestinations from "../components/homeComponents/PopluarDestinations";
import ThemeTours from "../components/homeComponents/ThemeTours";
import Services from "../components/homeComponents/Services";
import FAQ from "../components/homeComponents/FAQ";

const Home = () => {
  return (
    <Container>
      <div className="section"><Banner /></div>
      <div className="section"><PopularDestinations /></div>
      <div className="section"><Services /></div>
      <div className="section"><ThemeTours /></div>
      <div className="section"><FAQ /></div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
  /* overflow-x: hidden; */
  .section {
    margin-bottom: -5rem; 
  }

  .section:last-child {
    margin-bottom: 0;
  }
`;

export default Home;