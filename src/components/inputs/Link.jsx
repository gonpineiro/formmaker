import React from "react";

const Link = ({ link_title, url }) => {
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body text-dark">
          {link_title ? <p>{link_title}</p> : null}
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Link;
