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
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "NEWS_SENTIMENT",
            sort: "LATEST",
            limit: "20",
            apikey: "8AGS05FMO0YQX6D0",
          },
        });
        setNewsFeed(response.data.feed);
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
      <h3 style={{ margin: "0 0 10px 0", padding: "0" }}>
        Today's financial news
      </h3>
      <span
        className={styles.newsList}
        style={{ backgroundColor: "#e8f0fe", color: "#1a73e8" }}
      >
        Top stories
      </span>
      <span className={styles.newsList}>Local market</span>
      <span className={styles.newsList}>World markets</span>
      {newsFeed && newsFeed.length > 0 ? (
        newsFeed.map((item, index) => (
          <div
            key={index}
            className="news-item"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <span>{item.source}</span>
              <h4>
                <a className={styles.topics} href={item.url}>
                  {item.title}
                </a>
              </h4>
              <p>Published: {item.time_published}</p>
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
