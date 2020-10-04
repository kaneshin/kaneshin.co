import React from "react";
import { Link } from "gatsby";

export default () => (
  <div className="h-60px flex justify-between">
    <h1 className="h-full flex items-center">
      <Link
        to="/"
        className="h-full flex items-center text-18px font-medium transition duration-300 ease-in-out hover:text-primary"
      >
        Hi, this is kaneshin.
      </Link>
    </h1>
  </div>
);
