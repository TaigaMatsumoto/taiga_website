import React from 'react'
// import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import { changeContentForNewBlogPost } from '../../../redux/actions/action'
import { connect } from 'react-redux'
import marked from 'marked'
// import Textarea from '@material-ui/core/Textarea'
const styles = {
  textArea: {
    resize: 'none',
    width: '70%',
  },
}
const mapDispatchToProps = dispatch => {
  return {
    changeContentForNewBlogPost: content => {
      dispatch(changeContentForNewBlogPost(content))
    },
  }
}
const mapStateToProps = state => {
  return { content: state.newPost.content }
}
function tailorMarkedUp(notTailoredhtml) {
  return { _html: notTailoredhtml }
}
class Content extends React.Component {
  getMarkdownText() {
    let rawMarkup = marked(this.props.content, { sanitize: true })
    // console.log(rawMarkup)
    return { __html: rawMarkup }
  }
  render() {
    const { content } = this.props
    // console.log(content)
    return (
      <Textarea
        style={styles.textArea}
        minRows={30}
        onChange={e => this.props.changeContentForNewBlogPost(e.target.value)}
        value={content}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
