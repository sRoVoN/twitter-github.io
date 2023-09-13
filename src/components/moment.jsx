import React from "react";
import { useParams } from "react-router-dom";
import { getUser } from "./services/fakeTwitterUserService";

function Moment(props) {
  const params = useParams();
  const momnt = getUser(parseInt(params.momentId));
  console.log(momnt);
  return (
    <div>
      <p> {momnt.phone}</p>
    </div>
  );
}

export default Moment;
