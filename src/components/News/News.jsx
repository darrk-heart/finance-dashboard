import React, { useEffect, useState } from "react";
import axios from "axios";

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
            ticker: "AAPL",
            sort: "LATEST",
            limit: "50",
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
      <h3>Today's financial news</h3>
      {newsFeed && newsFeed.length > 0 ? (
        newsFeed.map((item, index) => (
          <div key={index} className="news-item">
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
            <p>Source: {item.source}</p>
            <p>Published: {item.time_published}</p>
            <a href={item.url}>Read more</a>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default News;
