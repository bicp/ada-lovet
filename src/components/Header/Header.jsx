import React from "react";
import "./Header.css";

export function Header(props) {
  return (
    <div id="main-header">
      <div id="btn-div">
        <button>Any subject</button>
        <button>Any Distance</button>
        <button>Reset Filters</button>
      </div>
      <div id="input-div">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}
