import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Route, Link } from "react-router-dom";
import PostTemplate from "../../templates/postTemplate";
// import { Link } from 'gatsby'
// import { navigate } from 'gatsby'
const styles = {
  card: {
    width: 400,
    margin: "3%"
  },
  media: {
    height: 200
  }
};

class MediaCard extends React.Component {
  // console.log(`thumbnail is ${thumbnail}`)
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.id
    };
    this.showBlogPage = this.showBlogPage.bind(this);
  }
  showBlogPage = () => {
    const { id } = this.props;
    let url = `/blog/showPost/:${id}`;
    console.log(url);
    // // let params = new URLSearchParams(url)
    // // params.append('id', this.props.id)
    // console.log(this.props)
    // window.location.href = url;
    // console.log('h')
    fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      redirect: "follow"
    }).then(res => {
      console.log(res);
    });
  };
  render() {
    const { classes, title, author, date, content, thumbnail, id } = this.props;
    // console.log(this);
    return (
      <div style={{ marginRight: "30px" }}>
        <Link to={`/blog/showPost/${id}`}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => this.showBlogPage()}>
              <CardMedia
                className={classes.media}
                image={thumbnail}
                title={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography component="p">{author}</Typography>
                <Typography component="p">{content}</Typography>
                <Typography component="p">{date}</Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Link>
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
