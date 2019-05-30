/**
 * @file
 * App component. This is used by both client and server/html-webpack-plugin.
 */

import React from "react";
import IAmPink from "./child";
import "./styles.scss";
console.dir(styles);
const App = () => {
  return (
    <div>
      hi there
      <IAmPink />
    </div>
  );
};

export default App;
