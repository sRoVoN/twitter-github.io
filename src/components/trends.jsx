import React from "react";
import { BLUE } from "../helpers/colors";

const Trends = () => {
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action "
        style={{ marginTop: 20 }}
      >
        <h3>Trends for you.</h3>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" style={{ color: BLUE }}>
            Corey Lewandowski
          </h5>
        </div>
        <small style={{ opacity: 0.7 }}>27.K Tweets</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" style={{ color: BLUE }}>
            UN Human Rights Council
          </h5>
        </div>
        <small className="text-body-secondary">
          US Plans to withdraw from UN Human Rights Council.
        </small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" style={{ color: BLUE }}>
            #SDLive
          </h5>
        </div>
        <small className="text-body-secondary">0.1K Tweets</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" style={{ color: BLUE }}>
            #TheBachelorette
          </h5>
        </div>
        <small className="text-body-secondary">18.1K Tweets</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" style={{ color: BLUE }}>
            #MakeARulen4Words
          </h5>
        </div>
        <small className="text-body-secondary">3.605 Tweets</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" style={{ color: BLUE }}>
            #Hunter Strickland
          </h5>
        </div>
        <small className="text-body-secondary">2.506 Tweets</small>
      </a>
    </div>
  );
};

export default Trends;
