import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <div className="card">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a product of service</p>
        <p>Version:1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
