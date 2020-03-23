import React from "react";
import {connect} from "react-redux";
import Post from "./Post";
import {Animated} from 'react-animated-css'

const Posts = ({syncPosts}) => {

  if (!syncPosts.length) {
    return <p className="text-center">Нет постов :(</p>
  }

  return syncPosts.map( post =>
    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
      <Post post={post} key={post.id}/>
    </Animated>
    )
}

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
};

export default connect(mapStateToProps, null)(Posts);
