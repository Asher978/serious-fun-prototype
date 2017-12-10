import React from "react";
import { Link } from "react-router-dom";

const Policies = props => {
  return (
    <div className="policiesContainer">
      <div className="policiesMainTitle">Policies</div>
      <div className="policiesInnerContainer">
        <p className="policiesInnerText">
          Please review the following policies of Serious Fun, designed for your
          child’s safety and protection. We look forward to serving your family.
        </p>
        <Link to="" id="policiesBtn" className="policiesInnerBtn">
          OPEN PDF HANDBOOK
        </Link>
      </div>
    </div>
  );
};

export default Policies;
