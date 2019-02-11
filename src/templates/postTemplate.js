import React from "react";
import marked from "marked";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    flexGrow: 1,
    width: "100%",
    height: "auto"
  },
  subContainerHeader: {
    width: "70%",
    justifyContent: "center",
    display: "flex"
  },
  thumbnailContainer: {
    width: "70%",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.between("md", "xl")]: {
      paddingRight: "15vw"
    }
  },
  thumbnailContainerWrapper: {
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.between("md", "xl")]: {
      height: "50vh"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      height: "30vh"
    }
  },
  thumbnail: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.between("md", "xl")]: {
      height: "50vh"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      height: "30vh"
    }
  },
  flexItemHeader: {
    height: "50vh",
    justifyContent: "center",
    display: "flex"
  },
  titleandAuthorDateContainerWrapper: {
    display: "flex",
    [theme.breakpoints.between("md", "xl")]: {
      height: "50vh"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      height: "20vh",
      justifyContent: "center"
    },
    justifyContent: "center"
  },
  titleandAuthorDateContainer: {
    width: "70%",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.between("md", "xl")]: {
      paddingTop: "10vh",
      paddingLeft: "20%"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      alignItems: "center"
    }
  },
  title: {
    display: "flex",
    [theme.breakpoints.between("md", "xl")]: {
      // paddingLeft: '15vw',
      alignItems: "center",
      // paddingTop: '5%',
      justifyContent: "center",
      fontSize: "3vw"
      // height:
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "7vw",
      justifyContent: "center"
    }
  },
  authorAndDateContainerWrapper: {
    [theme.breakpoints.between("md", "xl")]: {
      paddingLeft: "22%"
    },
    height: "30%"
  },
  authorAndDateContainer: {
    [theme.breakpoints.between("md", "xl")]: {
      // paddingLeft: '10%',
    },
    [theme.breakpoints.between("xs", "sm")]: {
      justifyContent: "center"
    }
  },
  authorAndDate: {
    fontSize: "1vw",
    [theme.breakpoints.between("md", "xl")]: {
      // paddingRight: '15vw',
      fontSize: "1.5vw"
      // height:
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2.5vw",
      display: "flex",
      justifyContent: "center"
    }
  },
  flexItemContent: {
    height: "auto",
    justifyContent: "center",
    display: "flex"
  },
  flexSubContainerContent: {
    width: "40%",
    justifyContent: "flex-start",
    [theme.breakpoints.between("md", "xl")]: {
      marginTop: "10vh"
      // height:
    }
  },
  testOne: {
    [theme.breakpoints.between("md", "xl")]: {
      flexDirection: "row-reverse"
    }
  },
  blogContent: {
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "1.2vw"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "3vw"
    }
  }
});

class PostTemplate extends React.Component {
  // const { node } = props.data.allMongodbTaigaWebsiteBlog.edges[0];

  // const { title, author, date, content, thumbnail } = node;
  // // console.log('preview is loaded')
  constructor(props) {
    super(props);
    this.state = {
      post: {
        status: false,
        title: null,
        author: null,
        date: null,
        content: null,
        thumbnail: null
      }
    };
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }
  getMarkdownText(content) {
    // const { content } = node;
    let rawMarkup = marked(content, { sanitize: true });
    // console.log(rawMarkup)
    return { __html: rawMarkup };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(`id is ${id}`);
    fetch(`/blog/showPost/${id}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          status: true,
          title: myJson.title,
          author: myJson.author,
          date: myJson.date,
          content: myJson.content,
          thumbnail: myJson.thumbnail
        });
      });
  }

  render() {
    const { classes } = this.props;
    console.log(">>>>>>>>>>>>>>>>>");
    console.log(this.props.match.params.id);
    console.log(">>>>>>>>>>>>>>>>>");
    const { status, author, title, date, thumbnail, content } = this.state;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {status ? (
          <Grid container className={classes.container}>
            <Grid container className={classes.testOne}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className={classes.thumbnailContainerWrapper}
              >
                <Grid container className={classes.thumbnailContainer}>
                  <Grid item className={classes.thumbnail}>
                    <img
                      src={thumbnail}
                      style={{ width: "auto", height: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className={classes.titleandAuthorDateContainerWrapper}
              >
                <Grid container className={classes.titleandAuthorDateContainer}>
                  <Grid item xs={12} sm={12} md={12} className={classes.title}>
                    {title}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.authorAndDateContainerWrapper}
                  >
                    <Grid container className={classes.authorAndDateContainer}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={12}
                        className={classes.authorAndDate}
                      >
                        Author: {author}
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={12}
                        className={classes.authorAndDate}
                      >
                        Date: {date}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.flexItemContent}
            >
              <Grid container className={classes.flexSubContainerContent}>
                <p
                  dangerouslySetInnerHTML={this.getMarkdownText(content)}
                  className={classes.blogContent}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(Preview))
// export const query = graphql`
//   query($slug: String!) {
//     allMongodbTaigaWebsiteBlog(filter: { fields: { slug: { eq: $slug } } }) {
//       edges {
//         node {
//           id
//           title
//           thumbnail
//           date
//           content
//         }
//       }
//     }
//   }
// `
export default withStyles(styles)(PostTemplate);
