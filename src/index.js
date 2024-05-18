/**
Purpose: The index.js file is the entry point of the React application. 
It imports the root component which is App.jsx and renders it into the div with id="root" in index.html. */

import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App></App>, document.getElementById("app"));
