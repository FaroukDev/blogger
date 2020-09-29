import React from "react";

const Comment = (props) => {
  return (
    <div key={props.id} className="comment">
      <div>
        <img src={props.src} alt="profile" />
      </div>
      <h3>{props.email}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Comment;
