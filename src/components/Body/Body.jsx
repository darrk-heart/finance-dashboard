import React from "react";
import Interest from "../Interests/Interest";
import WatchList from "../WatchList/WatchList";
import Portfolio from "../Portfolio/Portfolio";
import Trends from "../Trends/Trends";
import Calendar from "../Calendar/Calendar";
import MostFollowed from "../MostFollowed/MostFollowed";
import News from "../News/News";
import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";

function Body() {
  return (
    <>
      <div
        className="roboto-medium"
        style={{
          display: "flex",
          padding: "0 260px 0 230px",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "65%" }}>
          <Interest />
          <WatchList />
          <News />
        </div>
        <div style={{ width: "32%", marginTop: "15px" }}>
          <Portfolio />
          <Trends />
          <Calendar />
          <MostFollowed />
        </div>
      </div>
      <div
        className="roboto-medium"
        style={{
          padding: "0 260px 0 230px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Discover />
        <Footer />
      </div>
    </>
  );
}

export default Body;
