import React from "react";

const COURSES = {
  2022: [
    {
      name: "Market Wizards Series by Jack D. Schwager",
      link: "https://github.com/mikinty/Trading-Curriculum#core-concepts",
    },
    {
      name: "Understanding Cryptography (WIP)",
      link: "https://amzn.to/3JrQLCA",
    },
    {
      name: "WSET III (WIP)",
    },
    {
      name: "Macroeconomics by Mankiw (Intro)",
      link: "https://www.amazon.com/dp/1319105998/ref=as_sl_pc_tf_til?tag=viriditybooks-20&linkCode=w00&linkId=8fe7ff5587c1d0409ac65a3da154a41b&creativeASIN=1319105998",
    },
    {
      name: "Statistics (Intro level)",
      link: "https://amzn.to/3LPkXKc",
    },
    {
      name: "Intro to Accounting",
      link: "https://lyryx.com/introduction-financial-accounting/",
    },
  ],
  2021: [
    {
      name: "Trading Psychology and Basic Concepts",
      link: "https://github.com/mikinty/Trading-Curriculum#introductory",
    },
    {
      name: "Real Estate Salesperson (NY)",
      link: "https://github.com/mikinty/real-estate-salesperson",
    },
    {
      name: "WSET II (w. distinction)",
    },
    {
      name: "Founded Viridity Capital LLC",
      link: "https://github.com/viriditycapital",
    },
  ],
  2020: [
    {
      name: "Real Analysis I",
      link: "https://github.com/mikinty/Understanding-Analysis-Abbott-Solutions",
    },
  ],
};

/**
 * This page talks about what I am studying about, books I've read, courses I've
 * taken etc.
 */
class AcademiaPage extends React.Component {
  renderCourseLink(courseElement) {
    let listElement = <div>{courseElement.name}</div>;
    if (courseElement.link != undefined) {
      listElement = (
        <a href={courseElement.link} target="_blank">
          {courseElement.name}
        </a>
      );
    }

    return <li key={courseElement.name}>{listElement}</li>;
  }

  renderCourses() {
    let items = [];

    for (const [year, courses] of Object.entries(COURSES)) {
      items.push([
        <div key={year}>
          {year}:<ul>{courses.map(this.renderCourseLink)}</ul>
        </div>,
        year,
      ]);
    }

    // We want the most recent courses to pop up on top
    items.sort((tuple) => -tuple[1]);

    return items.map((tuple) => tuple[0]);
  }

  render() {
    return (
      <div className="page" id="academia">
        {this.renderCourses()}
      </div>
    );
  }
}

export default AcademiaPage;
