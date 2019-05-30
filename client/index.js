/**
 * @file
 * This is the client-side entrypoint.
 * It mainly imports and instantiates the App component.
 */

import React from "react";
import { hydrate } from "react-dom";
import App from "./app";

hydrate(<App {...window.context} />, document.getElementById("app"));
