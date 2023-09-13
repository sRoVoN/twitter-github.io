import React from "react";
import { getPosts } from "./services/fakeTwitterPostService";

function Posts(props) {
  const posts = getPosts([]);
  return <div></div>;
}

export default Posts;
