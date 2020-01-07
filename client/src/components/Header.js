import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import UserHeader from "./UserHeader";

const Header = () => {
  return (
    <div className="ui menu inverted">
      <Link to="/" className="item">
        <UserHeader />
      </Link>
      <div className="right menu">
        <div className="item">
          <Link to="/">All Streams</Link>
        </div>
        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
