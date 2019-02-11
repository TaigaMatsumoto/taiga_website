import React from "react";
import styled from "styled-components";

import PostList from "../../components/blog/postList";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Link, Route } from "react-router-dom";

const style = theme => ({
  mainContainer: {
    width: "100%",
    paddingTop: "5%"
  },
  flexing: {
    display: "flex"
  },
  verticalCenter: {
    alignItems: "center"
  },
  horizontalCenter: {
    justifyContent: "center"
  }
});
// export default ({ data }) => {
//   console.log(data)
//   return <div>Hello world</div>
// }

// const BlogPage2 = ({ data }) => {
//   console.log(data)
//   return <div>Hello fucking world</div>
// }
const header = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, cors, *same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, same-origin, *omit
  headers: {
    "Content-Type": "application/json; charset=utf-8"
    // "Content-Type": "application/x-www-form-urlencoded",
  }
};
class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: null
    };
  }
  componentDidMount() {
    fetch("/blog/getAllPosts", header)
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        console.log("json strignfied");
        console.log(JSON.stringify(myJson));
        this.setState({
          allPosts: myJson
        });
      });
  }
  render() {
    const { classes } = this.props;
    console.log("????????????????????????");
    console.log(this.state.allPosts);
    console.log("????????????????????????");
    return (
      <Grid
        container
        className={[
          classes.mainContainer,
          classes.flexing,
          classes.horizontalCenter
        ]}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          className={[classes.flexing, classes.horizontalCenter]}
        >
          <Title>Blog</Title>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          className={[
            classes.mainContainer,
            classes.flexing,
            classes.horizontalCenter
          ]}
        >
          <Link to="/blog/newPost">New Post</Link>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          className={[
            classes.mainContainer,
            classes.flexing,
            classes.horizontalCenter
          ]}
        >
          {this.state.allPosts == null ? null : (
            <PostList postResource={this.state.allPosts} />
          )}
        </Grid>
      </Grid>
    );
  }
}

const Title = styled.div`
  font-weight: 700;
  font-size: 3vw;
`;

export default withStyles(style)(BlogPage);
// export default BlogPage2
