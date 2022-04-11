import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { PROJECT_GRID } from "./data.js";
import AcademiaPage from "./pages/AcademiaPage.js";
import FoodPage from "./pages/FoodPage.js";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  createGridElement(element) {
    return (
      <div className="grid-element" key={element.name}>
        <a href={element.url} target="_blank">
          <div
            className="grid-picture"
            style={{ backgroundImage: `url(${element.photo})` }}
          />
        </a>
        <div className="grid-information">
          <div className="grid-header">{element.name}</div>
          <div className="grid-subheader">{element.description}</div>
        </div>
      </div>
    );
  }

  createGrid(gridElements) {
    let gridResult = [];

    for (let i = 0; i < gridElements.length; i += 2) {
      let rowElements =
        i + 1 < gridElements.length
          ? [
              this.createGridElement(gridElements[i]),
              this.createGridElement(gridElements[i + 1]),
            ]
          : this.createGridElement(gridElements[i]);

      gridResult.push(
        <div className="grid-row" key={i}>
          {rowElements}
        </div>
      );
    }

    return gridResult;
  }

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
              <HashLink className="link" to="#academia" smooth={true}>
                Timeline
              </HashLink>
              <HashLink className="link" to="#foodwine" smooth={true}>
                Food & Wine
              </HashLink>
              <HashLink className="link" to="#realestate" smooth={true}>
                Real Estate
              </HashLink>
            </div>
          </div>
        </div>
        <div className="page" id="projects">
          <div className="grid">{this.createGrid(PROJECT_GRID)}</div>
        </div>
        <AcademiaPage />
        <FoodPage />
        <div className="page" id="realestate">
          Licensed Real Estate Salesperson for NY, specializing in luxury
          properties in Manhattan. If you want me to help you find your next
          place in NYC, leveraging technology and data analysis, please contact
          me. More about my services at this{" "}
          <a href="https://github.com/mikinty/real-estate-salesperson/blob/main/collecting_commission.md">
            this article
          </a>
          . Currently working on a scraper to get the latest rental prices from
          certain websites...
        </div>
      </Router>
    );
  }
}

export default App;
