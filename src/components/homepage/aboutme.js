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
  }
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  componentDidMount() {
    this.setState({
      aboutMeComponent: {
        image: this.aboutMeJson[0].image,
        content: this.aboutMeJson[0].content
      }
    });
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
            <div
              style={{
                width: '100px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
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
          <Grid xs={12} item style={{ height: '60vh' }}>
            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
              <div
                style={{
                  height: '100%',
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={images[this.state.aboutMeComponent.image]}
                  style={{ width: 'auto', height: '65%', marginLeft: '10vw' }}
                />
              </div>
              <div
                style={{
                  height: '100%',
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10%'
                  }}
                >
                  <p
                    style={{
                      fontSize: '2vw',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: 'Source Sans Pro, sans-serif'
                    }}
                  >
                    {this.state.aboutMeComponent.content}
                  </p>
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
