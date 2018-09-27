import React from "react";
import "./MovieNav.css";

const MovieNav = () => (
  <div className="movie-menu">
    <a className="menu-items" href="/all">
      All Movies
    </a>
    <a className="menu-items" href="/complete">
      Completed
    </a>
    <a className="menu-items" href="/dropped">
      Dropped
    </a>
    <a className="menu-items" href="/ptw">
      Plan to Watch
    </a>
  </div>
);

export default MovieNav;
