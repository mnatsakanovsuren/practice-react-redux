import React from "react";

export default ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <hr/>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  )
}