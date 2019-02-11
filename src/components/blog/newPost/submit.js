import React from "react";
// import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
  },
  input: {
    display: "none"
  }
});
const mapStateToProps = state => ({
  date: state.newPost.date,
  author: state.newPost.author,
  title: state.newPost.title,
  content: state.newPost.content,
  thumbnail: state.newPost.thumbnail
});

const Submit = props => {
  const { classes, title, date, author, content, thumbnail } = props;
  // console.log(`post info is ${props}`)
  // console.log(props)
  // console.log(
  //   JSON.stringify({
  //     title: title,
  //     date: date,
  //     author: author,
  //     content: content,
  //   })
  // )
  const submitNewPost = async () => {
    // console.log(JSON.stringify({ title, date, author, content, thumbnail }));
    fetch("/blog/newPost/upload", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, date, author, content, thumbnail })
    })
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        console.log(myJson);
        // const { message } = myJson;
        console.log(myJson["status"]);
        if (myJson["status"] == true) {
          alert("Congrats!! You successfully uploaded post!");
          window.history.back();
        } else {
          console.log("failed");
        }
      });
  };
  return (
    <Button
      variant="contained"
      component="span"
      className={classes.button}
      onClick={submitNewPost}
    >
      Submit
    </Button>
  );
};

// const SubmitWrapper = styled.div``

export default connect(mapStateToProps)(withStyles(styles)(Submit));
