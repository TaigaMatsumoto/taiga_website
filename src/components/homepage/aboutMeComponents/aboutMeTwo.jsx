import React from 'react';
import myPic from '../../../images/aboutMe/me_fishing.jpeg';
import styled from 'styled-components';
const AboutMeTwo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AboutMePhoto>
        <img
          alt="Taiga"
          src={myPic}
          style={{
            width: 'auto',
            height: '30vh'
          }}
        />
      </AboutMePhoto>
      <div>two</div>
    </div>
  );
};
const AboutMePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 959) {
    margin-top: 5vh;
  }
`;
const AboutMeContent = styled.p`
  font-family: 'Montserrat', sans-serif;
  // line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
  }
  @media screen and (max-width: 767px) {
    align: 'center';
    font-size: 2vw;
  }
`;

export default AboutMeTwo;
