import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import { changePreviewState } from '../../../redux/actions/action'
// import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

function getMarkdownText() {
  let rawMarkup = marked(this.props.content, { sanitize: true })
  console.log(rawMarkup)
  return { __html: rawMarkup }
}
const mapStateToProps = state => {
  return {
    date: state.newPost.date,
    author: state.newPost.author,
    title: state.newPost.title,
    content: state.newPost.content,
    preview: state.newPost.preview,
    thumbnail: state.newPost.thumbnail,
  }
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    width: '100%',
    height: 'auto',
  },
  subContainerHeader: {
    width: '70%',
    justifyContent: 'center',
    display: 'flex',
  },
  thumbnailContainer: {
    width: '70%',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      paddingRight: '15vw',
    },
  },
  thumbnailContainerWrapper: {
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      height: '50vh',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '30vh',
    },
  },
  thumbnail: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.between('md', 'xl')]: {
      height: '50vh',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '30vh',
    },
  },
  flexItemHeader: {
    height: '50vh',
    justifyContent: 'center',
    display: 'flex',
  },
  titleandAuthorDateContainerWrapper: {
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      height: '50vh',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '20vh',
      justifyContent: 'center',
    },
    justifyContent: 'center',
  },
  titleandAuthorDateContainer: {
    width: '70%',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      paddingTop: '10vh',
      paddingLeft: '20%',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      alignItems: 'center',
    },
  },
  title: {
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      // paddingLeft: '15vw',
      alignItems: 'center',
      // paddingTop: '5%',
      justifyContent: 'center',
      fontSize: '3vw',
      // height:
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '7vw',
      justifyContent: 'center',
    },
  },
  authorAndDateContainerWrapper: {
    [theme.breakpoints.between('md', 'xl')]: {
      paddingLeft: '22%',
    },
    height: '30%',
  },
  authorAndDateContainer: {
    [theme.breakpoints.between('md', 'xl')]: {
      // paddingLeft: '10%',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: 'center',
    },
  },
  authorAndDate: {
    fontSize: '1vw',
    [theme.breakpoints.between('md', 'xl')]: {
      // paddingRight: '15vw',
      fontSize: '1.5vw',
      // height:
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '2.5vw',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  flexItemContent: {
    height: 'auto',
    justifyContent: 'center',
    display: 'flex',
  },
  flexSubContainerContent: {
    width: '40%',
    justifyContent: 'flex-start',
    [theme.breakpoints.between('md', 'xl')]: {
      marginTop: '10vh',
      // height:
    },
  },
  testOne: {
    [theme.breakpoints.between('md', 'xl')]: {
      flexDirection: 'row-reverse',
    },
  },
  blogContent: {
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '3vw',
    },
  },
})
const mapDispatchToProps = dispatch => ({
  changePreviewState: preview => {
    dispatch(changePreviewState(preview))
  },
})

class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.getMarkdownText = this.getMarkdownText.bind(this)
  }
  getMarkdownText() {
    let rawMarkup = marked(this.props.content, { sanitize: true })
    // console.log(rawMarkup)
    return { __html: rawMarkup }
  }
  render() {
    const { changePreviewState } = this.props
    const { preview, title, author, date, thumbnail } = this.props
    const { classes } = this.props
    // console.log('preview is loaded')
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Grid container className={classes.container}>
          <Grid item sm={12} md={12} style={{ backgroundColor: 'black' }}>
            <button onClick={() => changePreviewState(!preview)}>
              back to edit
            </button>
          </Grid>

          <Grid
            container
            className={classes.testOne}
            // direction="column-reverse"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.thumbnailContainerWrapper}
              // style={{ backgroundColor: 'blue' }}
            >
              <Grid container className={classes.thumbnailContainer}>
                <Grid item className={classes.thumbnail}>
                  <img
                    src={thumbnail}
                    style={{ width: 'auto', height: '100%' }}
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
              // style={{ backgroundColor: 'yellow' }}
            >
              <Grid container className={classes.titleandAuthorDateContainer}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  // style={{ fontSize: '3vw', height: '70%' }}
                  className={classes.title}
                >
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
            // style={{ backgroundColor: 'pink' }}
          >
            <Grid container className={classes.flexSubContainerContent}>
              <p
                dangerouslySetInnerHTML={this.getMarkdownText()}
                className={classes.blogContent}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Preview))
