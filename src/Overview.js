import React from "react";
import "./Overview.css";
export default function Overview() {
  let overviewData = {
    city: "Tel-Aviv",
    date: "Tuesday 10:00",
    describtion: "Cloudy",
  };
  return (
    <div className="Overview">
      <h1>{overviewData.city}</h1>
      <ul>
        <li>Last updated: {overviewData.date}</li>
        <li>{overviewData.describtion}</li>
      </ul>
    </div>
  );
}
