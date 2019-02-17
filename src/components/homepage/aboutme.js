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
    width: '80%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    [theme.breakpoints.up('md')]: {
      height: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '50%'
    }
  },
  contentContainer: {
    [theme.breakpoints.up('md')]: {
      height: '100%'
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  image: {
    height: '100%',
    objectFit: 'contain'
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
    console.log(`about me ref is`);
    // console.log(rop);
    return (
      <div ref={this.props.refProp} className={classes.mainContainer}>
        <Grid container className={classes.mainContainer}>
          <Grid item md={12} style={{ height: '30%' }}>
            <Grid container className={classes.container}>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.item}`, `${classes.titleContainer}`)}
              >
                <Typography component="h3" variant="h2" gutterBottom>
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
          <Grid item md={12} style={{ height: '70%' }}>
            <Grid container className={classes.container}>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.item}`, `${classes.contentContainer}`)}
              >
                <img src={currentImage} className={classes.image} />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={classNames(`${classes.item}`, `${classes.contentContainer}`)}
              >
                <div className={classes.item} style={{ width: '60%', height: '60%' }}>
                  <Typography variant="body1" gutterBottom>
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
