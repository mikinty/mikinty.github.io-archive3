import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page" id="main">
          <div id="splash">
            <div id="name">Michael You</div>
            <div id="link-container">
              <HashLink className="link" to="#projects" smooth={true}>
                Projects
              </HashLink>
              <HashLink className="link" to="#realestate" smooth={true}>
                Real Estate
              </HashLink>
              <HashLink className="link" to="#foodwine" smooth={true}>
                Food & Wine
              </HashLink>
            </div>
          </div>
        </div>
        <div className="page" id="projects">
          <div>
            Lunar Gala: Eusociality
          </div>
          <div>
            Viridity Capital LLC
            DFCSM
          </div>
          <div>
            Academia
            CMU ECE CS Guide
            Circuits Research
          </div>
        </div>
        <div className="page" id="realestate">
          Licensed Real Estate Salesperson for NY, specializing in luxury properties in Manhattan.


        </div>
        <div className="page" id="foodwine">
          Always looking for a special way to enjoy life.

          Yelp Elite

          WSET II

          Vivino
        </div>
      </Router>
    );
  }
}

export default App;
