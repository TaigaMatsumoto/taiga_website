import React from 'react';
import styled from 'styled-components';
import githubMark from '../../images/GitHub-Mark-64px.png';
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import Works from '../portfolio_components/works';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: '100%',
    height: '100%'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: '70%'
    }
  }
});
const Portfolio = props => {
  const { classes } = props;
  return (
    // <PortfolioWrapperParent id="portfolio">
    //   <PortfolioWrapper>
    //     <TitleWrapper>
    //       <MediaQuery minDeviceWidth={768}>
    //         <Title>
    //           <div
    //             style={{ fontSize: '3vw', fontWeight: '400', marginTop: '5%' }}
    //           >
    //             Portfolio
    //           </div>
    //         </Title>
    //       </MediaQuery>
    //       <MediaQuery maxDeviceWidth={767}>
    //         <Title>
    //           <div style={{ fontSize: '5vw', fontWeight: '400' }}>Portfolio</div>
    //         </Title>
    //       </MediaQuery>
    //       <PortfolioContent>
    //         <PortfolioIconWrapper>
    //           <PortfolioIcon alt="github Mark" src={githubMark} />
    //         </PortfolioIconWrapper>
    //         <PortfolioLinksWrapper>
    //           <PortfolioLink>
    //             <Link href="https://github.com/taigamatsumoto" target="_blank">
    //               https://github.com/taigamatsumoto
    //             </Link>
    //           </PortfolioLink>
    //         </PortfolioLinksWrapper>
    //       </PortfolioContent>
    //     </TitleWrapper>
    //     <Works />
    //   </PortfolioWrapper>
    // </PortfolioWrapperParent>
    <PortfolioWrapperParent id="portfolio">
      <PortfolioWrapper>
        <Grid container className={classes.root} spacing={40} justify="center">
          <Grid
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '550px'
              }}
            >
              <PortfolioIconWrapper>
                <PortfolioIcon alt="github Mark" src={githubMark} />
              </PortfolioIconWrapper>
              <PortfolioLink>
                <Link href="https://github.com/taigamatsumoto" target="_blank">
                  https://github.com/taigamatsumoto
                </Link>
              </PortfolioLink>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <Works />
          </Grid>
        </Grid>
      </PortfolioWrapper>
    </PortfolioWrapperParent>
  );
};

const PortfolioWrapperParent = styled.div`
  width: 100%;
  height: 100%;
  // background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  // align-items: center;
`;
const PortfolioWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 10%;
`;
const PortfolioContent = styled.div`
  width: 100%;
  // display: grid;
  // @media screen and (min-width: 768px) {
  //   grid-template-columns: 20% 1fr;
  // }
  // @media screen and (max-width: 767px) {
  //   grid-template-columns: 40% 1fr;
  //   margin-top: 10vh;
  // }
  // grid-template-areas: 'icon link';
`;
const PortfolioIconWrapper = styled.div`
  // grid-area: icon;
  // display: flex;
  // justify-content: center;
  @media screen and (max-width: 960px) {
    padding-left: 20%;
  }
`;
const PortfolioIcon = styled.img`
  @media screen and (min-width: 768px) {
    width: auto;
    height: 5vw;
    // margin-top: 5%;
  }
  @media screen and (max-width: 767px) {
    width: auto;
    height: 8vw;
    margin-right: 15%;
  }
  height: auto;
`;
const PortfolioLinksWrapper = styled.div`
  grid-area: link;
  display: flex;
  // align-items: center;
  font-family: 'Montserrat', sans-serif;
`;

const PortfolioLink = styled.div`
  @media screen and (min-width: 768px) {
    // font-size: 1.3vw;
    // margin-top: 8%;
    // margin-left: 5%;
  }
  @media screen and (max-width: 767px) {
  }
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
`;
const Title = styled.div`
  // font-weight: Extra-light;
  // color: black;
  @media screen and (max-width: 960px) {
    font-size: 5vw;
  }
  @media screen and (min-width: 961px) {
    font-size: 3vw;
  }
`;
export default withStyles(styles)(Portfolio);
