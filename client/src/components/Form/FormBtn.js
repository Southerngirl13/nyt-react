import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn search-button">
    {props.children}
  </button>
);
