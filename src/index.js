import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import ToDo from "./ToDo";

injectGlobal`
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  background: linear-gradient(#aeffae, #3d99ff);
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

ReactDOM.render(<ToDo />, document.getElementById("root"));
