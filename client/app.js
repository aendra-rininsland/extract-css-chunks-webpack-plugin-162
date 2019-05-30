/**
 * @file
 * App component. This is used by both client and server/html-webpack-plugin.
 */

import React from "react";

const App = () => {
  // The following will cause html-webpack-plugin to throw. This is expected.
  // However, the resulting stack trace is nigh-on unusable due to lacking
  // proper sourcemap support.
  const numOfDivs = document.querySelectorAll("div").length;
  return <div>hi there are {numOfDivs} divs</div>;
};

export default App;
