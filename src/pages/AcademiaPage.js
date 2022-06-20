import React from "react";

const COURSES = {
  2022: [
    {
      name: "Linear Algebra Done Right: Learning linalg again...pure math edition",
      link: "https://amzn.to/3N4dfvg",
      additional_links: {
        solutions: "https://github.com/mikinty/Axler-Linear-Algebra-Solutions",
      },
    },
    {
      name: "The Black Swan: Taleb explains fat tails",
      link: "https://amzn.to/3HzASdY",
    },
    {
      name: "Fooled by Randomness: Taleb explains why humans are bad at EV",
      link: "https://amzn.to/3y4eOEZ",
    },
    {
      name: "More Than You Know: Behavioral Theory in the context of financial markets",
      link: "https://amzn.to/3xx1NSQ",
    },
    {
      name: "Hillbilly Elegy: A famous book about how tough it is to come up from the American Appalachia",
      link: "https://amzn.to/3y258uS",
    },
    {
      name: "Big Debt Crises: Macro before and after the bubble",
      link: "https://amzn.to/3mYI3mz",
    },
    {
      name: "Principles of Mathematical Analysis: Learning some more analysis...",
      link: "https://amzn.to/3y4joDh",
      additional_links: {
        solutions: "https://github.com/mikinty/Baby-Rudin-Solutions",
      },
    },
    {
      name: "Freakonomics: Re-reading this book. Really helps with understanding correlation vs causation.",
      link: "https://amzn.to/3y6bGbY",
    },
    {
      name: "Number Sense: Math tricks to help solve arithmetic quickly",
      link: "http://bryantheath.com/number-sense-tricks-manual/",
    },
    {
      name: "Technical Analysis of the Financial Markets: Seeing what tools people use to analyze price action; is it all astrology?",
      link: "https://amzn.to/3xBynDj",
    },
    {
      name: "Reminiscences of a Stock Operator: Learning about market psychology",
      link: "https://amzn.to/3n3IlIS",
    },
    {
      name: "Guide to Competitive Programming: Learning and Improving Algorithms Through Contests",
      link: "https://amzn.to/3QvT4t0",
    },
    {
      name: "The Art and Craft of Problem Solving: Competition Math skills for High School and intro to College",
      link: "https://amzn.to/3bcXKnx",
    },
    {
      name: "Market Wizards Series by Jack D. Schwager: Trading psychology, stories, and techniques. Great interviews from even greater traders.",
      link: "https://github.com/mikinty/Trading-Curriculum#core-concepts",
    },
    {
      name: "Understanding Cryptography: How to communicate securely and prevent cryptographic attacks",
      link: "https://amzn.to/3N5rLCV",
    },
    {
      name: "WSET III: Learning more about wine...diploma next?",
      additional_links: {
        "wine buying guide": "https://github.com/mikinty/wine-buying-guide",
        notes: "https://github.com/mikinty/wine-education",
      },
    },
    {
      name: "System Design Interview: A great overview on what questions to expect on system design interviews",
      link: "https://amzn.to/3OvL1L3",
    },
    {
      name: "Macroeconomics by Mankiw (Intro)",
      link: "https://amzn.to/3N6JDgK",
    },
    {
      name: "Statistics (Intro level)",
      link: "https://amzn.to/3OnhZNx",
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
      name: "Understanding Analysis: Real Analysis I",
      link: "https://amzn.to/3y4T4sP",
      additional_links: {
        solutions:
          "https://github.com/mikinty/Understanding-Analysis-Abbott-Solutions",
      },
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

    const additional_links =
      courseElement.additional_links != undefined ? (
        <div>
          {Object.entries(courseElement.additional_links).map((entry) => (
            <a
              href={entry[1]}
              target="_blank"
              style={{ marginLeft: 12 }}
              key={entry[0]}
            >
              ({entry[0]})
            </a>
          ))}
        </div>
      ) : null;

    return (
      <li key={courseElement.name}>
        <div className="li_academia">
          {listElement}
          {additional_links}
        </div>
      </li>
    );
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
        <h1>Check out what I've been up to...</h1>
        {this.renderCourses()}
      </div>
    );
  }
}

export default AcademiaPage;
