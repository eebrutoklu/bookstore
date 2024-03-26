import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column gap-5 justify-content-center align-items-center">
      <img className="w-50 " src="/images/welcome.gif" alt="" />
      <p>
        Click to go to the{" "}
        <Link to={"/products"} className="link">
          Products Page.
        </Link>
      </p>
    </div>
  );
};

export default MainPage;
