import React from 'react'
import styled from 'styled-components'
// import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { changeAuthorForNewBlogPost } from '../../../redux/actions/action'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})
const mapStateToProps = state => {
  return {
    author: state.newPost.author,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeAuthorForNewBlogPost: author => {
      dispatch(changeAuthorForNewBlogPost(author))
    },
  }
}
// const boundChangeAuthorForNewBlogPost = author =>
//   dispatch(changeAuthorForNewBlogPost(author))
class Author extends React.Component {
  render() {
    const { classes, author } = this.props

    return (
      <AuthorWrapper>
        {/* <TextField
          required
          id="outlined-required"
          label="Author Name (Required)"
          // className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={e => this.props.changeAuthorForNewBlogPost(e.target.value)}
          value={author}
        /> */}
        <InputLabel htmlFor="author">Author</InputLabel>
        <Select
          value={author}
          onChange={e => this.props.changeAuthorForNewBlogPost(e.target.value)}
          inputProps={{
            name: 'author',
            id: 'author',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Taiga">Taiga</MenuItem>
        </Select>
      </AuthorWrapper>
    )
  }
}

const AuthorWrapper = styled.div``
// const Author = connect(
//   null,
//   mapDispatchToProps
// )(withStyles(styles)(UnconnectedAuthor))

// export default connect(
//   null,
//   mapDispatchToProps
// )(Author)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Author))
