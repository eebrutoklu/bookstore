import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const loc = useLocation();
  console.log(loc);

  return (
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-md-6">
        <img src="../public/images/notfounpage.webp" alt="" />
      </div>
      <div className="col-md-6 ">
        <p
          className="text-center
        "
        >
          The page you are looking for cannot be found. <br></br> Return to{" "}
          <Link to={"/"} className="link">
            homepage
          </Link>
          {loc.state && <p className="bg-danger rounded">{loc.state}</p>}
          {/* varsa  */}
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
