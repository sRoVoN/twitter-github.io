import React from "react";

function CardHeader(props) {
  return (
    <div className="card-header" style={{ background: "#c0deed" }}>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          className="form-control"
          placeholder="What's hapening?"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <button className="btn btn-primary">post</button>
      </div>
    </div>
  );
}

export default CardHeader;
