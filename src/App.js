import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./component/FeedbackList";
// import feedbackData from "./data/feedbackData";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
// import axios from "axios";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./component/AboutLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // let feedbackData = [];
  // const fetchingData = async () => {
  //   let response = await axios.get("/api/feedback");
  //   const { data: feedback } = response;
  //   setFeedback(feedback);
  // };
  // fetchingData();

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are You Sure Want to Delete This Feedback")) {
  //     await axios.delete(`/api/feedback/${id}`);
  //   }
  // };

  // const handleadd = async (newFeedback) => {
  //   await axios.post("/api/feedback", newFeedback);
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
