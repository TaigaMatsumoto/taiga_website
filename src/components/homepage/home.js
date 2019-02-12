import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import menuIcon from '../../images/menu.png';
import resume from '../../resume/resume_taiga_matsumoto.pdf';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typed from 'typed.js';

const styles = theme => ({
  container: {
    width: '100%',
    // height: '100%',
    marginBottom: ' 10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontColor: {
    color: 'black'
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

    this.myTyped();
  }
  myTyped() {
    let index = 0;
    const { temps } = this.state;
    for (let i = 0; i < temps.length; i++) {
      const addCharToArr = () => {
        this.setState(prevState => {
          console.log(temps[i][index]);
          console.log(`loop index is ${i}`);
          console.log(`string index is ${index}`);
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
    return (
      <div className={classes.container}>
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            wordWrap: 'normal'
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
      </div>
    );
  }
}

export default withStyles(styles)(Home);
