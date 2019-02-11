import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { changeDateForNewBlogPost } from '../../../redux/actions/action'
import { connect } from 'react-redux'
// import marked from 'marked'

const styles = theme => ({
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  // },
})
const mapDispatchToProps = dispatch => {
  return {
    changeDateForNewBlogPost: date => {
      dispatch(changeDateForNewBlogPost(date))
    },
  }
}
const mapStateToProps = state => {
  return { date: state.newPost.date }
}
class CalenderDate extends React.Component {
  componentDidMount() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!
    let yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    today = `${yyyy}-${mm}-${dd}`
    this.props.changeDateForNewBlogPost(today)
    // console.log(this.props.date)
  }
  render() {
    const { classes } = this.props
    // console.log(marked(this.props.date))
    return (
      <DateWrapper>
        <TextField
          type="date"
          required
          id="outlined-required"
          label="Date (Required)"
          value={this.props.date}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={e => this.props.changeDateForNewBlogPost(e.target.value)}
          autoFocus
        />
      </DateWrapper>
    )
  }
}

const DateWrapper = styled.div`
  //   width: 300px;
  //   height: 300px;
`
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CalenderDate))
