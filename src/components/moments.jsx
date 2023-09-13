import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./services/fakeTwitterUserService";
import { BLACK, LIGHTGRAY } from "../helpers/colors";

const Moments = () => {
  const moments = getUsers();
  console.log(moments);
  return (
    <>
      <h3 style={{ color: BLACK }}>Moment</h3>
      {moments.map((user) => (
        <div className="row" key={user.id}>
          <div style={{ color: LIGHTGRAY }}>
            <Link
              to={`/moments/${user.id}`}
              style={{ textAlign: "justify", textDecoration: "none" }}
            >
              {user.email}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Moments;
