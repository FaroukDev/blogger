import React, { Component } from "react";

import Post from "./Post";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setTimeout(
          () =>
            this.setState({
              posts: result,
            }),
          2000
        );
      });
  };
  render() {
    let posts = this.state.posts.map((post, key) => (
      <Post key={key} id={post.id} title={post.title} description={post.body} />
    ));

    return (
      <div>
        <h3></h3>
        <div className="container articles-container">
          {posts.length === 0 ? <div class="loadingio-spinner-ripple-w34ug69aiop">
            <div class="ldio-pgqjanqbwd">
              <div></div>
              <div></div>
            </div>
          </div> : posts.slice(0,12)}
        </div>
      </div>
    );
  }
}
