import React from "react";
import { BLUEFONT } from "../helpers/colors";

const Profile = () => {
  return (
    <section className="container" style={{ backgroundColor: "#fff" }}>
      <div className="grid">
        <div className="row">
          <img
            src="https://via.placeholder.com/280x140"
            alt=""
            className="img-fluid img-thumbnail "
          />
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="https://avatar.iran.liara.run/public"
              style={{ width: 100, borderRadius: 50 }}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-6">
            <p
              style={{ fontWeight: "bold", letterSpacing: 0.9, float: "right" }}
            >
              Soodeh Arvin
            </p>
            <br />
            <p style={{ opacity: 1, float: "right" }}>@soodeharvin</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-4 ">
            <p style={{ opacity: 0.8, rowGap: 2 }}>Tweets</p>
            <p style={{ color: BLUEFONT, rowGap: 2 }}>12,189</p>
          </div>
          <div className="col-4">
            <p style={{ opacity: 0.8, rowGap: 2 }}>Following</p>
            <p style={{ color: BLUEFONT, rowGap: 2 }}>12,189</p>
          </div>
          <div className="col-4">
            <p style={{ opacity: 0.8, rowGap: 2 }}>Followers</p>
            <p style={{ color: BLUEFONT, rowGap: 2 }}>12,189</p>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Profile;
