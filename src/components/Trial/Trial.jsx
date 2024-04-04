import React, { useEffect } from "react";
import axios from "axios";

function Trial() {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://google-finance-worldwide-indexes.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            "c6c7772e38msh54ccc06c3b1c805p19e97djsne2973b46e118",
          "X-RapidAPI-Host": "google-finance-worldwide-indexes.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        border: "1px solid #dddddd",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        marginTop: "15px",
      }}
    >
      Trial
    </div>
  );
}

export default Trial;
