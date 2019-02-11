import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/app";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import BlogPage from "./pages/blog/blog";
// import NewPost from "./pages/blog/blog_components/newPost";
import { Provider } from "react-redux";
import store from "./redux/store/store";
// import PostTemplte from "./templates/postTemplate";
import NotFound from "./components/404/404";
const url = "https://taigamatsumoto.github.io/taiga_website";
ReactDOM.render(
  <Provider store={store} basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Switch>
        <Route path={`/`} component={App} exact />
        {/* <Route path={`${url}/blog`} component={BlogPage} exact /> */}
        {/* <Route path="/blog/newPost" path={`${url}/blog/newPost`} component={NewPost} exact /> */}
        {/* <Route exact path="/blog/showPost/:id" component={PostTemplte} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
