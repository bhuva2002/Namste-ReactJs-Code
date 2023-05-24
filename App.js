import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id: "title"
}, 
"heading1");

const heading2 = React.createElement("h2", {
    id: "title"
}, 
"heading2");

const container = React.createElement("div", {
    id: "container",
    hello: "Hii"
}, 
[heading, heading2, heading]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);