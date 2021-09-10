import React from "react";

const Separator = ({ separator_title, separator_description, hcolor }) => {
  return (
    <div className="mb-3">
      <div className="card">
        <div
          className="card-header text-light"
          style={{ backgroundColor: hcolor || "#266AAD" }}
        >
          {separator_title}
        </div>
        <div
          className="card-body text-dark"
          dangerouslySetInnerHTML={{ __html: separator_description }}
        ></div>
      </div>
    </div>
  );
};

export default Separator;
