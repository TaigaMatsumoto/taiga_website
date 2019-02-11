import React, { lazy } from "react";
import BlogCard from "./blogCard";
import { withStyles } from "@material-ui/core/styles";
// import { graphql } from "gatsby";
import LazyLoad from "react-lazyload";

const style = theme => ({
  blogCardContainer: {
    width: "80vw",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexing: {
    display: "flex"
  },
  verticalCenter: {
    alignItems: "center"
  },
  horizontalCenter: {
    justifyContent: "center"
  },
  card: {
    marginRight: "10px"
  }
});

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
    this.getFirstThirtyWords = this.getFirstThirtyWords.bind(this);
  }
  getFirstThirtyWords(sentense) {
    let wordsArray = sentense.split(" ");
    let wordsString;
    let maxString;
    const defaultMaxString = 30;
    if (wordsArray.length < defaultMaxString) {
      maxString = wordsArray.length;
    } else {
      maxString = defaultMaxString;
    }
    wordsString = wordsArray.slice(0, maxString).join(" ");
    return wordsString;
  }
  componentDidMount() {
    // console.log('hi')
    // fetch('./getAllPosts', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // })
    //   .then(res => {
    //     // console.log(res)
    //     return res.json()
    //   })
    //   .then(myJson => {
    //     // console.log('myjson is')
    //     // console.log(myJson)
    //     this.setState({
    //       posts: myJson,
    //     })
    //   })
  }
  render() {
    console.log("*********************************");
    console.log(this.props);
    console.log("*********************************");
    const { classes } = this.props;
    console.log(this.props.postResource);
    return (
      <div
        className={[
          classes.blogCardContainer,
          classes.flexing,
          classes.horizontalCenter
        ]}
      >
        {/* {this.state.posts ? (
          <div
            style={{
              width: ' 80vw',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {this.state.posts.map(post => (
              <BlogCard
                title={post.title}
                author={post.author}
                date={post.date}
                content={post.content}
                thumbnail={post.thumbnail}
                id={post._id}
                key={post._id}
                // style={classes.blogCard}
                // name="this is blog card"
              />
            ))}
          </div>
        ) : null} */}
        <div
          style={{
            width: " 80vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {this.props.postResource.map((post, index) => (
            <LazyLoad height={200}>
              <BlogCard
                className={classes.card}
                title={post.title}
                author={post.author}
                date={post.date}
                content={this.getFirstThirtyWords(post.content)}
                thumbnail={post.thumbnail}
                // slug={node.fields.slug}
                id={post._id}
                key={index}
              />
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(PostList);
