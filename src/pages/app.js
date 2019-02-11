import React from "react";
// import { Link } from 'gatsby'
// import Image from "gatsby-image"
import Home from "../components/homepage/home";
import Blog from "../components/homepage/blog";
import Portfolio from "../components/homepage/portfolio";
import AboutMe from "../components/homepage/aboutme";
import Footer from "../components/homepage/footer";
import styled from "styled-components";
import bgImage from "../images/bg_image_one_sunrise.jpg";
import source from "../static/Sail-Away.mp4";
import logo from "../static/logo.png";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { timingSafeEqual } from "crypto";
import resume from "../resume/resume_taiga_matsumoto.pdf";
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Provider } from 'react-redux'
// import store from '../redux/store/store'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    // width: "100%",
    // height: "100%"
  },
  makeItFlex: {
    display: "flex"
  },
  flexDirectionRow: {
    flexDirection: "row"
  },
  horizontallyCenter: {
    justifyContent: "center"
  },
  verticallyCenter: {
    alignItems: "center"
  },
  verticallyBottom: {
    alignItems: "flex-end"
  },
  spaceAround: {
    justifyContent: "space-around"
  },
  logoContainer: {
    // height: "25vh"
  },
  navContainer: {
    zIndex: "100",
    cursor: "pointer"
  },
  navMainContainer: {
    height: "10vh"
  },
  aTag: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "3px solid white"
    },
    zIndex: "100"
  },
  mainComponentContainer: {
    width: "100%"
  },
  flexGrow: {
    flexGrow: "1"
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {
        home: true,
        about: false,
        portfolio: false,
        blog: false
      },
      home: {
        string: [
          "Welcome to my website !",
          "I am Taiga",
          "Please enjoy my place :)"
        ]
      }
    };
    this.homeName = "home";
    this.aboutName = "about";
    this.portfolioName = "portfolio";
    this.blogName = "blog";
    this.selectComponent = this.selectComponent.bind(this);
    this.changeComponentState = this.changeComponentState.bind(this);
  }
  selectComponent() {
    const { home, about, portfolio, blog } = this.state.nav;
    const { string } = this.state.home;
    if (home) {
      return <Home string={string} />;
    } else if (about) {
      return <AboutMe />;
    } else if (portfolio) {
      return <Portfolio />;
    } else if (blog) {
      return <Blog />;
    }
  }
  changeComponentState(componentName) {
    const navNames = Object.keys(this.state.nav);
    for (let i = 0; i < navNames.length; i++) {
      if (this.state.nav[navNames[i]] === true) {
        this.setState(prevState => ({
          nav: {
            ...prevState.nav,
            [navNames[i]]: false
          }
        }));
        break;
      }
    }
    this.setState(prevStata => ({
      nav: {
        ...prevStata.nav,
        [componentName]: true
      }
    }));
  }
  render() {
    const { classes } = this.props;
    return (
      <HomePage name="home page">
        <Grid
          container
          className={[classes.root, classes.main]}
          style={{ zIndex: "1" }}
        >
          <Grid
            item
            xs={12}
            style={{ height: "25vh", paddingTop: "50px" }}
            className={classNames(
              `${classes.makeItFlex}`,
              // `${classes.verticallyBottom}`,
              `${classes.horizontallyCenter}`
            )}
          >
            <Logo src={logo} />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ height: "5vh" }}
            className={classNames(
              `${classes.makeItFlex}`,
              `${classes.verticallyCenter}`,
              `${classes.horizontallyCenter}`
            )}
          >
            <div
              style={{
                width: "300px",
                paddingBottom: "35px"
              }}
              className={classNames(
                `${classes.makeItFlex}`,
                `${classes.verticallyCenter}`,
                `${classes.horizontallyCenter}`,
                `${classes.flexDirectionRow}`,
                `${classes.spaceAround}`
              )}
            >
              <div
                onClick={() => this.changeComponentState(this.homeName)}
                className={classes.navContainer}
              >
                <a className={classNames(`${classes.aTag}`)}>Home</a>
              </div>
              <div
                onClick={() => this.changeComponentState(this.aboutName)}
                className={classes.navContainer}
              >
                <a className={classNames(`${classes.aTag}`)}>About</a>
              </div>
              <div
                onClick={() => this.changeComponentState(this.portfolioName)}
                className={classes.navContainer}
              >
                <a className={classNames(`${classes.aTag}`)}>Portfolio</a>
              </div>
              {/* <div
                onClick={() => this.changeComponentState(this.blogName)}
                className={classes.navContainer}
              >
                <a className={classNames(`${classes.aTag}`)}>Blog</a>
              </div> */}
              <div className={classes.navContainer}>
                <a
                  className={classNames(`${classes.aTag}`)}
                  target="_blank"
                  href={resume}
                >
                  Resume
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            style={{
              height: "70vh"
              // marginBottom: "15%"
              // backgroundColor: "yellow"
            }}
            className={classNames(
              `${classes.makeItFlex}`,
              `${classes.verticallyCenter}`,
              `${classes.horizontallyCenter}`
            )}
          >
            <div
              name="slected cmponent"
              style={{ width: "100%", height: "100%" }}
              className={classNames(
                `${classes.makeItFlex}`,
                `${classes.verticallyCenter}`,
                `${classes.horizontallyCenter}`
              )}
            >
              {this.selectComponent()}
            </div>
          </Grid>
        </Grid>
        <VideoContainer>
          <Video autoPlay loop muted>
            <source src={source} type="video/mp4" />
          </Video>
        </VideoContainer>
      </HomePage>
    );
  }
}

const Logo = styled.img`
  position: relative;
  width: auto;
  height: 150px;
  z-index: 1;
`;
const Video = styled.video`
  // height: auto;
  // float: left;
  // left: 0;
  // top: 0;
  // padding: none;
  // position: fixed; /* optional depending on what you want to do in your app */
  z-index: -999;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;
const VideoContainer = styled.div`
position: absolute;
top: 0px;
left: 0px;
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
z-index: -1000;
overflow: hidden;
 -webkit-filter: blur(5px);
-moz-filter: blur(5px);
-o-filter: blur(5px);
-ms-filter: blur(5px);
filter: blur(5px);
`;
const HomePage = styled.div`
  // width: 100%;
  // height: 100%;
`;

export default withStyles(styles)(App);
