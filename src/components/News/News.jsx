import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./News.module.css";

function News() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [error, setError] = useState(null);
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const fetchNewsFeed = async () => {
      try {
        let cachedData = localStorage.getItem("newsFeedData");
        if (cachedData) {
          setNewsFeed(JSON.parse(cachedData));
        } else {
          const response = await axios.get(
            "https://www.alphavantage.co/query",
            {
              params: {
                function: "NEWS_SENTIMENT",
                sort: "LATEST",
                limit: "5",
                apikey: "8AGS05FMO0YQX6D0",
              },
            }
          );
          setNewsFeed(response.data.feed);
          localStorage.setItem(
            "newsFeedData",
            JSON.stringify(response.data.feed)
          );
        }
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setLimitReached(true);
        } else {
          setError(error);
        }
      }
    };

    fetchNewsFeed();
  }, []);

  if (limitReached) {
    return <div>Sorry, you have reached your daily API usage limit.</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="roboto-regular">
      <h3 style={{ margin: "40px 0 15px 0", padding: "0", fontWeight: "400" }}>
        Today's financial news
      </h3>
      <span
        className={styles.newsList}
        style={{
          backgroundColor: "#e8f0fe",
          color: "#1a73e8",
        }}
      >
        Top stories
      </span>
      <span className={styles.newsList}>Local market</span>
      <span className={styles.newsList}>World markets</span>
      {newsFeed && newsFeed.length > 0 ? (
        newsFeed.map((item, index) => (
          <div
            key={index}
            className={styles.newsItem}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <div style={{ display: "flex" }}>
                <span className={styles.source}>{item.source}</span>
                <span style={{ color: "#555555" }}> • </span>
                <span className={styles.published}>{item.time_published}</span>
              </div>
              <h4 style={{ padding: "0", marginTop: "15px", width: "93%" }}>
                <a className={styles.topics} href={item.url}>
                  {item.title}
                </a>
              </h4>
            </div>
            <img
              className={styles.image}
              src={item.banner_image}
              alt={item.title}
            />
          </div>
        ))
      ) : (
        <div>Updating...</div>
      )}
    </div>
  );
}

export default News;
