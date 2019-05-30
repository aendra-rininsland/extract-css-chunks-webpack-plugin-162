/**
 * @file
 * This is the actual "template" html-webpack-plugin consumes
 */
import "source-map-support/register"; // This does nothing.
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/app";

export default () => {
  return `<!doctype html>
    <html>
        <div id="app">${renderToString(<App />)}</div>
      </body>
    </html>`;
};
