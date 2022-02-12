import React from "react";

function NotFound() {
  const imageNotFound = require("../assets/404.jpeg");
  return <img src={imageNotFound} alt="Not Found" className="col-12" />;
}

export default NotFound;
