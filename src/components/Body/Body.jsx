import React from "react";
import Interest from "../Interests/Interest";
import WatchList from "../WatchList/WatchList";
import Portfolio from "../Portfolio/Portfolio";
import Trends from "../Trends/Trends";
import Calendar from "../Calendar/Calendar";
import MostFollowed from "../MostFollowed/MostFollowed";
import News from "../News/News";

function Body() {
  return (
    <div
      className="roboto-medium"
      style={{
        display: "flex",
        padding: "0 260px 0 230px",
        marginTop: "10px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "60%", backgroundColor: "red" }}>
        <Interest />
        <WatchList />
        <News />
      </div>
      <div style={{ width: "37%" }}>
        <Portfolio />
        <Trends />
        <Calendar />
        <MostFollowed />
      </div>
    </div>
  );
}

export default Body;
