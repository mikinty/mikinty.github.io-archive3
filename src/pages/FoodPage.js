import React from "react";

const YELP_PROFILE_LINK =
  "https://www.yelp.com/user_details?userid=RTTMsplbxNb61fujtFz23g";
const VIVINO_LINK = "https://www.vivino.com/users/michael-you1";
const YELP_BOOKMARKS_LINK =
  "https://www.yelp.com/collection/VroHKUR8qiIAmmFpJ3R2Bw/My-Bookmarks";
const YELP_NYC_PICKS =
  "https://www.yelp.com/collection/d8-pUMIxcsXeA9UHux76jQ/NYElite";

/**
 * This is the highest level of the web app.
 */
class FoodPage extends React.Component {
  render() {
    return (
      <div className="page" id="foodwine">
        Always looking for a special way to enjoy life.
        <ul>
          <li>
            <a href={YELP_PROFILE_LINK}>Yelp Elite</a>: Check out my curated
            lists
          </li>
          <ul>
            <li>
              <a href={YELP_BOOKMARKS_LINK}>Favorite places</a>
            </li>
            <li>
              <a href={YELP_NYC_PICKS}>Top picks in NYC</a>
            </li>
          </ul>
          <li>
            <a href={VIVINO_LINK}>Vivino</a>
          </li>
          : Big wine fan, currently studying WSET III.
        </ul>
      </div>
    );
  }
}

export default FoodPage;
