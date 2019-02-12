import React from 'react';
import styled from 'styled-components';
import myPic from '../../images/aboutMe/taiga_pic_one.jpg';
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AboutMeOne from './aboutMeComponents/aboutMeOne';
import AboutMeTwo from './aboutMeComponents/aboutMeTwo';
import AboutMeThree from './aboutMeComponents/aboutMeThree';
import classNames from 'classnames';
// import image from '../../images/aboutMe';
// import aboutMeJson from './aboutMeComponents/aboutMeJson';
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
  articleNumStyle: {
    cursor: 'pointer',
    zIndex: '100'
  },
  aboutMeContainerMain: {
    height: '60vh',

    [theme.breakpoints.down('sm')]: {
      marginTop: '5%'
    }
  },
  aboutMeInfoMainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  image: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '30vw',
      marginLeft: '10vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '60vw'
    }
  },
  contentContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  content: {
    height: '100%',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginRight: '10%'
    },
    [theme.breakpoints.down('sm')]: {}
  },
  contentPara: {
    fontSize: '2vw',
    lineHeight: '1.5',
    color: 'black',
    fontFamily: 'Source Sans Pro, sans-serif',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
      lineHeight: '1.5'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw'
    }
  },
  articleNavContainer: {
    width: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3%'
    }
  }
});
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: {
        articleOne: true,
        articleTwo: false,
        articleThree: false
      },
      aboutMeComponent: {
        image: null,
        content: null
      },
      canvas: {
        width: 640,
        height: 245
      }
    };
    this.aboutMeJson = [
      {
        content:
          'Hello. I am Taiga Matsumoto. I am Computer Science student at QUT.\n  My hobby is playing tennis, travel, and reading IT articles as well!',
        image: 'taiga_pic_one.jpg'
      },
      {
        content:
          'My hobby is playing and watching tennis! I joined in QUT tennis, and also Brisbane Tennis community. I went to watch Brisbane International Tennis 2018/2019, and Australian Open 2018',
        image: 'tennis_with_mates.jpg'
      },
      {
        content:
          'I also join in many different Hackathons in Brisbane :) I like to interact with new people to get new knowledge and information. This picture is taken when I joined in Brisbane Mobile App Hackathon and our team won the first place !',
        image: 'brisbane_mobile_hackathon.jpg'
      }
    ];
    this.articleIndexArray = [0, 1, 2];
    this.selectArticlesNum = this.selectArticlesNum.bind(this);
    this.importAll = this.importAll.bind(this);
    this.showImage = this.showImage.bind(this);
    this.getDataUrl = this.getDataUrl.bind(this);
  }
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  showImage(imagePath) {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = this.refs.image;
    const { width, height } = this.state;
    let base64;
    // canvas.width = width;
    // canvas.height = height;
    // let img = document.createElement('image');
    // let ctx = canvas.getContext('2d');
    base64 = this.getDataUrl(imagePath);
    img.setAttribute('src', `data:image/png;base64, ${base64}`);
    // const result = await function() {
    //   return new Promise(resolve => {
    //     img.onload = () => resolve(img);
    //     img.setAttribute('src', `data:image/png;base64, ${base64}`);
    //   });

    // };

    // result().then(res => {
    //   ctx.scale(width / res.width, height / res.height);
    //   ctx.drawImage(res, 0, 0);
    // });
  }
  getDataUrl(imagePath) {
    const canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.drawImage(imagePath, 0, 0);
    return canvas.toDataURL();
  }
  componentDidMount() {
    const images = this.importAll(
      require.context('../../images/aboutMe', false, /\.(png|jpe?g|svg)$/)
    );
    this.setState({
      aboutMeComponent: {
        image: this.aboutMeJson[0].image,
        content: this.aboutMeJson[0].content
      }
    });
    this.showImage(images[this.state.aboutMeComponent.image]);
  }

  selectArticlesNum(selectedNum) {
    this.setState({
      aboutMeComponent: {
        image: this.aboutMeJson[selectedNum].image,
        content: this.aboutMeJson[selectedNum].content
      }
    });
  }
  render() {
    const { classes } = this.props;
    const images = this.importAll(
      require.context('../../images/aboutMe', false, /\.(png|jpe?g|svg)$/)
    );
    console.log(images);
    return (
      <AboutMeWrapperParent id="aboutme">
        <Grid container className={classNames(`${classes.root}`)}>
          <Grid
            item
            xs={12}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className={classes.articleNavContainer}>
              <div
                className={classNames(`${classes.articleNumStyle}`)}
                onClick={() => this.selectArticlesNum(this.articleIndexArray[0])}
              >
                1
              </div>
              <div
                className={classNames(`${classes.articleNumStyle}`)}
                onClick={() => this.selectArticlesNum(this.articleIndexArray[1])}
              >
                2
              </div>
              <div
                className={classNames(`${classes.articleNumStyle}`)}
                onClick={() => this.selectArticlesNum(this.articleIndexArray[2])}
              >
                3
              </div>
            </div>
          </Grid>
          <Grid xs={12} item className={classes.aboutMeContainerMain}>
            <div className={classes.aboutMeInfoMainContainer}>
              <div
                style={{
                  height: '100%',
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <canvas
                  ref="canvas"
                  width={this.state.canvas.width}
                  height={this.state.canvas.height}
                />
                <img ref="image" />
                {/* <img src={images[this.state.aboutMeComponent.image]} className={classes.image} /> */}
              </div>
              <div className={classes.contentContainer}>
                <div className={classes.content}>
                  <p className={classes.contentPara}>{this.state.aboutMeComponent.content}</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </AboutMeWrapperParent>
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
