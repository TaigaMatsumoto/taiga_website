import React from 'react';
import styled from 'styled-components';
import myPic from '../../images/aboutMe/taiga_pic_one.jpg';
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
// import image from '../../images/aboutMe';
// import aboutMeJson from './aboutMeComponents/aboutMeJson';
const styles = theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '80%',
      height: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%'
    }
  },
  subMainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '80%',
      height: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15%',
      width: '100%',
      height: '100%'
    }
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    [theme.breakpoints.up('md')]: {
      height: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    }
  },
  item: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // titleContainer: {
  //   [theme.breakpoints.up('md')]: {
  //     height: '100%'
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     height: '50%'
  //   }
  // },
  title: {
    [theme.breakpoints.up('md')]: {
      fontSize: '3vw'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw'
    }
  },
  titleContainer: {
    [theme.breakpoints.up('md')]: {
      height: '30%%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '20%'
    }
  },

  contentContainer: {
    [theme.breakpoints.up('md')]: {
      height: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '80%'
    }
  },
  content: {
    [theme.breakpoints.up('md')]: {
      height: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '50%'
    }
  },
  logo: {
    width: '40%',
    height: 'auto'
  },
  navContainer: {
    width: '50%',
    display: 'flex',
    alignItemsS: 'center'
  },
  navElement: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3vw'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  image: {
    [theme.breakpoints.up('md')]: {
      width: '90%',
      objectFit: 'contain'
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      objectFit: 'contain'
    }
  },
  flexAllCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentPara: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1vw'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw'
    }
  }
});

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArticle: this.articleOne,
      images: null
    };
    this.articleOne = 0;
    this.articleTwo = 1;
    this.articleThree = 2;
  }

  render() {
    const { classes } = this.props;
    // const { changeComponentState, image, json } = this.props;
    const { json, currentNumber, images, changeComponentState } = this.props;
    // console.log(currentNumber);
    // console.log(json);
    const currentContent = json[currentNumber].content;
    const currentImage = images[json[currentNumber].image];
    // console.log(this.props.about.content);
    // console.log(this.props);
    // console.log(currentContent);
    // console.log(`about me ref is`);
    // console.log(rop);
    return (
      <div ref={this.props.refProp} className={classes.mainContainer} name="container 1">
        <Grid container className={classNames(`${classes.subMainContainer}`)} name="container 2">
          <Grid item md={12} className={classes.titleContainer} name="container 3">
            <Grid container className={classes.container}>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.item}`, `${classes.titleContainer}`)}
              >
                <Typography component="h3" variant="h2" className={classes.title}>
                  About Me
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.item}`, `${classes.titleContainer}`)}
              >
                <Grid
                  container
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '50%'
                  }}
                >
                  <Grid
                    item
                    md={4}
                    onClick={() => changeComponentState(this.articleOne)}
                    className={classes.navElement}
                  >
                    1
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => changeComponentState(this.articleTwo)}
                    className={classes.navElement}
                  >
                    2
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => changeComponentState(this.articleThree)}
                    className={classes.navElement}
                  >
                    3
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} className={classes.contentContainer}>
            <Grid container className={classes.container}>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.content}`, `${classes.flexAllCenter}`)}
              >
                <img src={currentImage} className={classes.image} />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.content}`, `${classes.flexAllCenter}`)}
              >
                <div className={classes.item} style={{ width: '60%', height: '60%' }}>
                  <Typography variant="body1" className={classes.contentPara}>
                    {currentContent}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const AboutMeWrapperParent = styled.div`
  width: 100%;
  height: 100%;
`;

const AboutMeWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default withStyles(styles)(AboutMe);
