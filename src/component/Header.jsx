import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={styles}>
      <div className="container">
        <h2>
          <NavLink className="my" to="/">
            {text}
          </NavLink>
        </h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
