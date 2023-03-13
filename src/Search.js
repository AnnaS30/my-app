import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form id="search-form">
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
              id="city-input"
            />
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-75"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
