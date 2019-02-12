import React from "react";
// import { Link } from 'gatsby'
// import Image from "gatsby-image"
import Home from "../components/homepage/home";
import Blog from "../components/homepage/blog";
import Portfolio from "../components/homepage/portfolio";
import AboutMe from "../components/homepage/aboutme";
import Footer from "../components/homepage/footer";
import styled from "styled-components";
// import bgImage from "../images/bg_image_one_sunrise.jpg";
import source from "../static/Sail-Away.mp4";
import logo from "../static/logo.png";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { timingSafeEqual } from "crypto";
import resume from "../resume/resume_taiga_matsumoto.pdf";
import bgImage from "../images/wallpaper/ocean_wallpaper.jpg";
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Provider } from 'react-redux'
// import store from '../redux/store/store'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    width: "100%",
    height: "100%"
    // margin: "0"
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
  navMainContainer: {
    [theme.breakpoints.up("md")]: {
      width: "30vw",
      paddingBottom: "35px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      width: "55vw"
    }
  },
  navContainer: {
    zIndex: "100",
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.5vw"
    }
  },

  aTag: {
    color: "black",
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
      },
      aboutMe: {
        images: null,
        number: 0
      },
      aboutMeJson: [
        {
          content:
            "Hello. I am Taiga Matsumoto. I am Computer Science student at QUT.\n  My hobby is playing tennis, travel, and reading IT articles as well!",
          image: "taiga_pic_one.jpg"
        },
        {
          content:
            "My hobby is playing and watching tennis! I joined in QUT tennis, and also Brisbane Tennis community. I went to watch Brisbane International Tennis 2018/2019, and Australian Open 2018",
          image: "tennis_with_mates.jpg"
        },
        {
          content:
            "I also join in many different Hackathons in Brisbane :) I like to interact with new people to get new knowledge and information. This picture is taken when I joined in Brisbane Mobile App Hackathon and our team won the first place !",
          image: "brisbane_mobile_hackathon.jpg"
        }
      ]
    };
    this.homeName = "home";
    this.aboutName = "about";
    this.portfolioName = "portfolio";
    this.blogName = "blog";
    this.selectComponent = this.selectComponent.bind(this);
    this.changeComponentState = this.changeComponentState.bind(this);
    this.importAll = this.importAll.bind(this);
  }
  componentDidMount() {
    const images = this.importAll(
      require.context("../images/aboutMe", false, /\.(png|jpe?g|svg)$/)
    );

    this.setState(prevState => ({
      aboutMe: {
        ...prevState.aboutMe,
        images: images
      }
    }));
  }
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
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
  changeComponentState(number) {
    this.setState(prevState => ({
      aboutMe: {
        ...prevState.aboutMe,
        number: number
      }
    }));
  }

  render() {
    const { classes } = this.props;
    const { aboutMeJson } = this.state;
    const { images, number } = this.state.aboutMe;
    // const { number } = this.state.aboutMe;
    console.log(aboutMeJson[0].content);
    console.log(number);
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
            style={{
              height: "25vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
            className={classNames(
              `${classes.makeItFlex}`,
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
              className={classNames(
                `${classes.makeItFlex}`,
                `${classes.verticallyCenter}`,
                `${classes.horizontallyCenter}`,
                `${classes.flexDirectionRow}`,
                `${classes.spaceAround}`,
                `${classes.navMainContainer}`
              )}
            >
              <div className={classes.navContainer}>
                <a className={classNames(`${classes.aTag}`)}>Home</a>
              </div>
              <div className={classes.navContainer}>
                <a className={classNames(`${classes.aTag}`)}>About</a>
              </div>
              <div className={classes.navContainer}>
                <a className={classNames(`${classes.aTag}`)}>Portfolio</a>
              </div>

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
            }}
            className={classNames(
              `${classes.makeItFlex}`,
              `${classes.verticallyCenter}`,
              `${classes.horizontallyCenter}`
            )}
          >
            <div
              style={{
                width: "100%",
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
              }}
              className={classNames(
                `${classes.makeItFlex}`,
                `${classes.verticallyCenter}`,
                `${classes.horizontallyCenter}`
              )}
            >
              <Home string={this.state.home.string} />
            </div>
          </Grid>
          <Grid xs={12}>
            {this.state.aboutMe.images != null ? (
              <AboutMe
                changeComponentState={this.changeComponentState}
                images={images}
                // json={aboutMeJson[0].content}
                json={aboutMeJson}
                currentNumber={number}
              />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <Portfolio />
          </Grid>
        </Grid>
      </HomePage>
    );
  }
}

const Logo = styled.img`
  // position: absolute;
  width: auto;
  height: 50%;
  z-index: 1;
  margin-bottom: 2%;
`;
const HomePage = styled.div`
  width: 100%;
  height: 100%;
  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    background-image: url(${bgImage});
    filter: blur(5px);
  }
`;

export default withStyles(styles)(App);
