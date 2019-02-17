import React from "react";
// import { Link } from 'gatsby'
// import Image from "gatsby-image"
import Home from "../components/homepage/home";
import Blog from "../components/homepage/blog";
import Portfolio from "../components/homepage/portfolio";
import AboutMe from "../components/homepage/aboutme";

import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
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
    this.homeRef = React.createRef();
    this.aboutMeRef = React.createRef();
    this.portfolioRef = React.createRef();
    this.componentsRefs = {
      homeRef: this.homeRef,
      aboutMeRef: this.aboutMeRef,
      portfolioRef: this.portfolioRef
    };
    this.blogName = "blog";
    this.selectComponent = this.selectComponent.bind(this);
    this.changeComponentState = this.changeComponentState.bind(this);
    this.importAll = this.importAll.bind(this);
  }
  componentDidMount() {
    console.log(`ref is`);
    console.log(this.componentsRefs.homeRef.current.offsetTop);
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
  scrollDownToElement(ref) {
    console.log(ref.current.offsetTop);
    ref.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  render() {
    const { classes } = this.props;
    const { aboutMeJson } = this.state;
    const { images, number } = this.state.aboutMe;
    // const { number } = this.state.aboutMe;
    // console.log(aboutMeJson[0].content);
    // console.log(number);
    return (
      <HomePage name="home page" id="home">
        {/* <HomePageSubContainer> */}
        <Grid
          container
          className={[classes.root, classes.main]}
          style={{ zIndex: "1" }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "100%"
            }}
            className={classNames(
              `${classes.makeItFlex}`,
              `${classes.verticallyCenter}`,
              `${classes.horizontallyCenter}`
            )}
          >
            <Home
              string={this.state.home.string}
              refProp={this.homeRef}
              componentsRefs={this.componentsRefs}
              scrollDownToElement={this.scrollDownToElement.bind(this)}
            />
          </Grid>
          <Grid
            xs={12}
            item
            style={{ height: "100vh" }}
            className={classNames(
              `${classes.makeItFlex}`,
              `${classes.verticallyCenter}`,
              `${classes.horizontallyCenter}`
            )}
          >
            {this.state.aboutMe.images != null ? (
              <AboutMe
                changeComponentState={this.changeComponentState}
                images={images}
                // json={aboutMeJson[0].content}
                json={aboutMeJson}
                currentNumber={number}
                refProp={this.aboutMeRef}
              />
            ) : null}
          </Grid>
          <Grid xs={12} item style={{ height: "100vh" }}>
            <Portfolio refProp={this.portfolioRef} />
          </Grid>
        </Grid>
        {/* </HomePageSubContainer> */}
      </HomePage>
    );
  }
}

const HomePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default withStyles(styles)(App);
