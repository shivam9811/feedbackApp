import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let count = feedback.length;
  const calAverage = () => {
    let sum = 0;
    feedback.forEach((f) => {
      sum = sum + +f.rating;
    });
    return sum / count;
  };
  const avg = calAverage().toFixed(1); // to fixed decimal to one point
  return (
    <div className="feedback-stats">
      <h4>{count} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
