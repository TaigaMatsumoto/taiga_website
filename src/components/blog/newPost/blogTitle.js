import React from 'react'
// import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { changeTitleForNewBlogPost } from '../../../redux/actions/action'
import { connect } from 'react-redux'
const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
  },
})
const mapStateToProps = state => {
  return {
    title: state.newPost.title,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeTitleForNewBlogPost: title => {
      dispatch(changeTitleForNewBlogPost(title))
    },
  }
}
class BlogTitle extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes, title } = this.props
    // console.log(title)
    return (
      <TextField
        required
        id="outlined-required"
        label="Title"
        // defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
        style={{ width: '70%' }}
        onChange={e => this.props.changeTitleForNewBlogPost(e.target.value)}
        value={title}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BlogTitle))
