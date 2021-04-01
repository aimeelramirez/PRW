import React, { Component } from "react";
import UpdatePost from "../../../reducers/post/updatePost";

//component on props child post
class Posts extends Component {
  render() {
    return (
      <>
        <div className="Posts" id="list-avatars">
          <UpdatePost />
        </div>
      </>
    );
  }
}
export default Posts;
