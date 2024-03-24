import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [newsSentimentData, setNewsSentimentData] = useState(null);

  useEffect(() => {
    const fetchNewsSentimentData = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "NEWS_SENTIMENT",
            // tickers: "AAPL",
            // limit: "20",
            apikey: "8AGS05FMO0YQX6D0",
          },
        });
        setNewsSentimentData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNewsSentimentData();
  }, []);
  return (
    <>
      <div className="roboto-regular">
        <h3>Today's financial news</h3>
        <div>
          <span>Top stories</span>
          <span>Local market</span>
          <span>World markets</span>
        </div>
        {newsSentimentData && (
          <div>
            <h2>Symbol: {newsSentimentData["Meta Data"]["2. Symbol"]}</h2>
            <p>
              Last Refreshed:{" "}
              {newsSentimentData["Meta Data"]["3. Last Refreshed"]}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default News;
