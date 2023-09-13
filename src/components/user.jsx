import React from "react";
import { getUsers } from "./services/fakeTwitterUserService";
import { getPosts } from "./services/fakeTwitterPostService";

function User(props) {
  const users = getUsers();
  const posts = getPosts();

  return (
    <div>
      {posts.forEach((post) => (
        <h4 key={post.id}>
          {users.map((user) => (
            <h4 key={user.id}>{user.name}</h4>
          ))}
        </h4>
      ))}
    </div>
  );
}

export default User;
