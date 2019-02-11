import React from "react";
import CalenderDate from "../../../components/blog/newPost/CalenderDate";
import Author from "../../../components/blog/newPost/author";
import BlogTitle from "../../../components/blog/newPost/blogTitle";
import Content from "../../../components/blog/newPost/content";
import Submit from "../../../components/blog/newPost/submit";
import Preview from "../../../components/blog/newPost/preview";
import Thumbnail from "../../../components/blog/newPost/thumbnail";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { changePreviewState } from "../../../redux/actions/action";

const mapStateToProps = state => ({
  preview: state.newPost.preview
});
const mapDispatchToProps = dispatch => ({
  changePreviewState: preview => {
    dispatch(changePreviewState(preview));
  }
});
const styles = theme => ({
  title: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "2vw",
    fontFamily: '"Raleway", sans-serif'
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  previewPage: {},
  flexing: {
    display: "flex"
  },
  centeringHorizontally: {
    justifyContent: "center"
  },
  centeringVertically: {
    alignItems: "center"
  },
  CalenderDateAndAuthorContainer: {
    width: "100%",
    flexDirection: "column",
    [theme.breakpoints.between("md", "xl")]: {
      paddingTop: "3%"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      // height: '30vh',
    }
  },
  titleAndContentContainer: {
    width: "100%"
  },
  thumbnailContainer: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%"
    }
  }
});

class newPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreviewOn: false
    };
    this.displayPreview = this.displayPreview.bind(this);
  }
  displayPreview() {
    this.setState(prevState => ({
      isPreviewOn: !prevState.isPreviewOn
    }));
    // console.log(this.state.isPreviewOn)
  }
  render() {
    const { classes, preview, changePreviewState } = this.props;
    // console.log(`preview state is ${preview}`)
    return (
      <div style={{ width: "100%", height: "auto" }}>
        {preview ? (
          <Preview />
        ) : (
          // <NewPostWrapperParent>
          <Grid container>
            <Grid
              container
              // md={12}
              // lg={12}
              // xl={12}
              className={[classes.flexing, classes.centeringHorizontally]}
            >
              <Grid
                item
                md={6}
                lg={6}
                xl={6}
                className={[classes.centeringHorizontally, classes.flexing]}
              >
                <Title>New Post</Title>
              </Grid>
              <Grid item md={6} lg={6} xl={6}>
                <button
                  onClick={() => {
                    changePreviewState(!preview);
                  }}
                >
                  Preview
                </button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                md={6}
                lg={6}
                xl={6}
                className={[
                  classes.centeringVertically,
                  classes.flexing,
                  classes.CalenderDateAndAuthorContainer
                ]}
              >
                <CalenderDate />
                <Author />
              </Grid>
              <Grid
                item
                md={6}
                lg={6}
                xl={6}
                className={[
                  classes.flexing,
                  classes.centeringHorizontally,
                  classes.thumbnailContainer
                ]}
              >
                <Thumbnail />
              </Grid>
            </Grid>
            <Grid
              name="hi"
              container
              // md={12}
              // lg={12}
              // xl={12}
              className={[
                classes.titleAndContentContainer,
                classes.flexing,
                classes.centeringHorizontally
              ]}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={[
                  classes.flexing,
                  classes.centeringHorizontally,
                  classes.titleAndContentContainer
                ]}
              >
                <BlogTitle />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={[
                  classes.flexing,
                  classes.centeringHorizontally,
                  classes.titleAndContentContainer
                ]}
              >
                <Content />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={[classes.flexing, classes.centeringHorizontally]}
            >
              <NewPostSubmitButtonWrapper>
                <Submit />
              </NewPostSubmitButtonWrapper>
            </Grid>
          </Grid>
          // </NewPostWrapperParent>
        )}
      </div>
    );
  }
}

const NewPostWrapperParent = styled.div`
  width: 100%;
  height: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NewPostInfoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;
const NewPostSubmitButtonWrapper = styled.div``;
const Title = styled.div`
  font-size: 2vw;
  font-family: "Raleway", sans-serif;
`;
const NewPostContentWrapper = styled.div`
  width: 80%;
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(newPost));
