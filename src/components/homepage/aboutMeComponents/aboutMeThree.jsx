import React from 'react';
import myPic from '../../../images/aboutMe/brisbane_mobile_hackathon.jpg';
import styled from 'styled-components';
const AboutMeThree = () => {
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
      <div>
        {/* <AboutMeContent>
          Hello. I am Taiga Matsumoto. I am Computer Science student at QUT.
        </AboutMeContent>
        <AboutMeContent>
          My hobby is playing tennis, travel, and reading IT articles as well!
        </AboutMeContent> */}
        three
      </div>
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

export default AboutMeThree;
