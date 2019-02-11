import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import githubMark from "../../images/GitHub-Mark-64px.png";
import ImgOne from "../../images/portfolio_image/portfolio_image_one.png";
import ImgTwo from "../../images/portfolio_image/react&redux.png";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  cardHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%"
  },
  card: {
    width: "60%",
    height: "100%"
  },
  header: {
    fontSize: "1.6vw"
  },
  media: {
    height: "30%",
    paddingTop: "56.25%", // 16:9
    width: "80%"
  }
});
class Works extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      // <WorksWrapperParent>
      // <WorksWrapper>
      <Grid container className={classes.root} spacing={16} justify="center">
        <Grid item md={6} xs={12} className={classes.cardHolder}>
          <Card className={classes.card} name="card">
            <CardHeader
              avatar={
                <a
                  href="https://github.com/TaigaMatsumoto/weather_checker"
                  target="_blank"
                >
                  <Avatar src={githubMark} />
                </a>
              }
              classes={{
                title: classes.header
              }}
              title="Weather Checker"
            />
            <CardMedia
              className={classes.media}
              image={ImgOne}
              title="weather checker"
            />
          </Card>
        </Grid>
        <Grid item md={6} xs={12} className={classes.cardHolder}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <a
                  href="https://github.com/TaigaMatsumoto/Create-user-with-react-mongo-redux-express"
                  target="_blank"
                >
                  <Avatar src={githubMark} />
                </a>
              }
              classes={{
                title: classes.header
              }}
              title="React Redux demo"
            />
            <CardMedia
              className={classes.media}
              image={ImgTwo}
              title="react and redux work"
            />
          </Card>
        </Grid>
      </Grid>
      //    </WorksWrapper>
      //  </WorksWrapperParent>
    );
  }
}

// const WorksWrapperParent = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `
// const WorksWrapper = styled.div`
//   width: 80%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `
export default withStyles(styles)(Works);
