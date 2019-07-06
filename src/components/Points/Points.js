import React from "react";
import "./Points.css";

const Points = props => (
  <div>
    <h3 className="points">Total Points: {props.total} / 12</h3>
  </div>
);

export default Points;
