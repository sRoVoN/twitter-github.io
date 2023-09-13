import React from "react";
import Feed from "./feed";
import Suggestions from "./suggestions";
import Advertisement from "./Advertisement";
import Profile from "./profile";
import Trends from "./trends";

const Home = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-3">
        <Profile />
        <Trends />
      </div>
      <div
        className="col-lg-6 col-md-5 col-sm-12"
        style={{ backgroundColor: "pink" }}
      >
        <Feed />
      </div>
      <div className="col-lg-3 col-md-3" style={{ backgroundColor: "purple" }}>
        <Suggestions />
        <Advertisement />
      </div>
    </div>
  );
};

export default Home;
