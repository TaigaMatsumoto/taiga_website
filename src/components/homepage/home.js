import React from 'react';
import styled from 'styled-components';
import resume from '../../resume/resume_taiga_matsumoto.pdf';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typed from 'typed.js';
// import styled from 'styled-components';
import classNames from 'classnames';
import bgImage from '../../images/wallpaper/ocean_wallpaper.jpg';
import logo from '../../static/logo.png';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  container: {
    width: '100%',
    // height: '100%',
    marginBottom: ' 10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeContainer: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center center'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '30vw',
      fontSize: '2vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      fontSize: '3vw'
    }
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      marginTop: '2vh'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '5vh',
      height: '20vh',
      width: 'auto'
    }
  },
  nav: {
    zIndex: '100',
    cursor: 'pointer',
    color: 'black'
  },
  fontColor: {
    color: 'black'
  },
  aTag: {
    textDecoration: 'none'
  },
  animatedText: {
    whiteSpace: 'pre',
    color: 'white',
    fontFamily: 'Special Elite, cursive',
    [theme.breakpoints.up('md')]: {
      fontSize: '5vw'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw'
    }
  }
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      temps: ['hello', 'enjoy', 'bye']
    };
    this.myTyped = this.myTyped.bind(this);
  }
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { string } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: string,
      typeSpeed: 50,
      backSpeed: 50
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);

    // this.myTyped();
  }
  myTyped() {
    let index = 0;
    const { temps } = this.state;

    for (let i = 0; i < temps.length; i++) {
      const addCharToArr = () => {
        this.setState(prevState => {
          // console.log(temps[i][index]);
          // console.log(`loop index is ${i}`);
          // console.log(`string index is ${index}`);
          return { string: prevState.string + temps[i][index] };
        });
        // console.log('HIiIIIIIIIIIIIIii');
        index++;
        let id = setTimeout(addCharToArr, 1000);
        if (index == temps[i].length) {
          clearTimeout(id);
        }
      };
      const reduceCharFromArr = () => {
        this.setState(prevState => ({
          string: prevState.string.substring(0, index - 1)
        }));
        index--;
        let id = setTimeout(reduceCharFromArr);
        if (index <= 0) {
          clearTimeout(id);
        }
      };
      addCharToArr();
      reduceCharFromArr();
    }
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);
    const { aboutMeRef, homeRef, portfolioRef } = this.props.componentsRefs;
    const { scrollDownToElement } = this.props;
    return (
      <HomeContainer ref={this.props.refProp}>
        <Grid container className={classes.homeContainer}>
          <Grid
            item
            xs={12}
            style={{
              height: '35vh',
              display: 'flex',
              justifyContent: 'center'
              // alignItems: 'flex-end'
            }}
            className={classNames(`${classes.makeItFlex}`, `${classes.horizontallyCenter}`)}
          >
            <Grid container>
              <Grid item xs={12}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Logo src={logo} className={classes.logo} />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div className={classes.navContainer}>
                  <div className={classes.nav} onClick={() => scrollDownToElement(homeRef)}>
                    <Typography component="h3" variant="h5" gutterBottom>
                      Home
                    </Typography>
                  </div>
                  <div className={classes.nav} onClick={() => scrollDownToElement(aboutMeRef)}>
                    <Typography component="h3" variant="h5" gutterBottom>
                      About
                    </Typography>
                  </div>
                  <div className={classes.nav} onClick={() => scrollDownToElement(portfolioRef)}>
                    <Typography component="h3" variant="h5" gutterBottom>
                      Portfolio
                    </Typography>
                  </div>
                  <div className={classes.nav}>
                    <Typography component="h3" variant="h5" gutterBottom>
                      <a className={classNames(`${classes.aTag}`)} target="_blank" href={resume}>
                        Resume
                      </a>
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: '65vh',
              display: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                wordWrap: 'normal',
                marginBottom: '10vh'
              }}
            >
              {/* <p>{this.state.string}</p> */}
              <span
                className={classes.animatedText}
                ref={el => {
                  this.el = el;
                }}
              />
            </div>
          </Grid>
        </Grid>
      </HomeContainer>
    );
  }
}
// const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   flex-direction: row;
//   @media (min-width: 960px) {
//   }
// `;

const Logo = styled.img`
  // position: absolute;
  width: auto;
  height: 50%;
  z-index: 1;
  // margin-bottom: 2%;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  // margin-bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withStyles(styles)(Home);
