import React from "react";

//With JSX - clean and easy to understand
export const Card = () => {
  return (
    <div id="card">
      <h2>Welcome</h2>
      <p>This is a <span id="highlight">paragraph</span> with text </p>
      <button>Click Me</button>
    </div>
  );
};

//Without JSX - more verbose and complex
export const CardWithoutJSX = () => {
  return React.createElement(
    "div",
    { id: "card" },
    React.createElement("h2", null, "Welcome"),
    React.createElement("p", null, "This is a ", React.createElement("span", { id: "highlight" }, "paragraph"), " with text "),
    React.createElement("button", null, "Click Me")
  );
};