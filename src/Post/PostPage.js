import React, { Component } from "react";
import Comment from './Comment';
import ProfileImage from '../Images/profile.png';


export default class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: [
        {
          id: 0,
          email: "jhondoe@gmail.com",
          content: "MOn commentaire",
        },
        {
          id: 1,
          email: "jhondoe@gmail.com",
          content: "MOn commentaire 2",
        },
        {
          id: 2,
          email: "jhondoe@gmail.com",
          content: "MOn commentaire 3",
        },
      ],
    };
  }
  componentDidMount =  () => {
    let id = this.props.match.params.id
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then((result) => {
      this.setState({
        post: result
      });
    },
    )

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then((result) => {
      this.setState({
        comments: result
      });
    },
    )
  
  }
  render() {
    let comments = this.state.comments.map((comment) => {
      return (
        <Comment key={comment.id} email={comment.email} content={comment.body} src={ProfileImage}/>
      );
    });
    return (
      <div className="container post-container">
        <div className="post">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
        </div>
        <div className="comments-container">
          <h2 className="comments-title">Commentaires</h2>
          {comments}
        </div>
      </div>
    );
  }
}
