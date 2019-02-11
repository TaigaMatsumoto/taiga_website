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
    // width: '100%',
    // height: '100%'
    marginBottom: ' 10%'
  },
  fontColor: {
    color: 'black'
  }
});
class Home extends React.Component {
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
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="home" className={classes.container}>
        <span
          style={{ whiteSpace: 'pre', fontFamily: 'Special Elite, cursive', fontSize: '5vw' }}
          ref={el => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
