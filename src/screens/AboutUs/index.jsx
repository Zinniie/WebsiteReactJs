import React from 'react'
import NavBar from '../../components/NavBar'
import styled from "styled-components";
import { color } from '../../constant/color';
import Enquiries from '../../components/Enquiries';
import Map from '../../assets/png/map.png'
import Locations from '../../components/Locations';
import Mentions from '../../components/Mentions';
import ContactForm from '../../components/ContactForm';
import OurTeam from '../../components/OurTeam';



function AboutUs() {
  return (
    <div>
      <NavBar />
      <MainContent className="main-content">
        <TopText className="top-text ">
          <div
            className="top-text1 fw-bold"
            style={{
              color: color.primary,
            }}
          >
            About Us
          </div>
          <div className="top-text2 fs-1 mt-3">We're a distributed team</div>
          <div
            className="top-text3 mt-3"
            style={{
              color: color.deepgrey,
            }}
          >
            We have offices and teams all around the world.
          </div>
        </TopText>

        <div className="map-img mt-5">
          <img
            src={Map}
            className="image-fluid map-image"
            alt={"Map"}
            style={{
              width: '1000px',
            }}
          />
        </div>

        <Enquiries />
        <Locations />
        <OurTeam/>
        <ContactForm/>
        <Mentions />
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
margin-top:50px`

const TopText = styled.div`
  margin-top: 150px;
`;


export default AboutUs