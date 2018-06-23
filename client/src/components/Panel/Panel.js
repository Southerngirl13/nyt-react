import React from "react";
import "./panel.css";

const Panel = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="panel"
  >
    {children}
  </div>
);

export default Panel;
