import React from "react";
import getProperty from "lodash/get";
import "./App.css";

import "./containers/container.styles.scss";
import "./containers/blue.container/blue.container.styles.scss";
import "./containers/purple.container/purple.container.style.scss";
import "./containers/red.container/red.container.styles.scss";

const App = (props) => {
  const hash = getProperty(window, "location.hash", "")
    .replace("/", "")
    .slice(1);
  const finalHash = hash.split(",");

  return (
    <div>
      <ul className="container">
        <li className="listItem">
          {finalHash.includes("red") && (
            <div id="red" className="red container-unit">
              red one
            </div>
          )}
        </li>
        <li className="listItem">
          {finalHash.includes("blue") && (
            <div id="blue" className="blue container-unit">
              blue one
            </div>
          )}
        </li>
        <li className="listItem">
          {finalHash.includes("purple") && (
            <div id="purple" className="purple container-unit">
              purple one
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default App;
