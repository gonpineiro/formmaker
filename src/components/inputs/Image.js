import React from "react";

const Image = ({ image_title, image_src, hcolor }) => {
  return (
    <div className="mb-3">
      <div className="card">
        <div
          className="card-header text-light"
          style={{ backgroundColor: hcolor || "#266AAD" }}
        >
          {image_title}
        </div>
        <img src={image_src} className="img-fluid" alt={image_title} />
      </div>
    </div>
  );
};

export default Image;
