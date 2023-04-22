import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "1", id: "child" }, [
    React.createElement("h1", { key: "2" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "3" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { key: "4", id: "child2" }, [
    React.createElement("h1", { key: "5" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "6" }, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
