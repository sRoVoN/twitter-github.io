import React from "react";
import { NavLink } from "react-router-dom";
import { getPosts } from "./services/fakeTwitterPostService";
import { DARKGRAY } from "../helpers/colors";

const Messages = (props) => {
  const posts = getPosts();
  console.log(posts);

  return (
    <div className="row " style={{ display: "flex" }}>
      {posts.map((post) => (
        <div
          className="col"
          key={post.id}
          style={{ width: 300, height: 800, mx: 50 }}
        >
          <NavLink
            style={{
              textAlign: "justify",
              textDecoration: "none",
              color: DARKGRAY,
            }}
            to={`/messages/${post.id}`}
          >
            {post.body}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Messages;
