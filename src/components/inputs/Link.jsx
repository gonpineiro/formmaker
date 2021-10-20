import React from "react";

const Link = ({ link_title, url, hcolor }) => {
  return (
    <div className="mb-3">
      <div className="card">
        <div
          className="card-header text-light"
          style={{ backgroundColor: hcolor || "#fff" }}
        >
          {link_title}
        </div>
        {url ? (
          <div className="card-body text-dark">
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Link;
