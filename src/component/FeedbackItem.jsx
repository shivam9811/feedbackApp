import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes
          onClick={() => handleDelete(item.id)}
          color="purple"
          size="20px"
        ></FaTimes>
      </button>
      <button className="edit">
        <FaEdit
          onClick={() => editFeedback(item)}
          color="purple"
          size="20px"
        ></FaEdit>
      </button>
      <div>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
