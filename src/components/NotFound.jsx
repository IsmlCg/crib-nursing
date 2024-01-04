import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main id="content" role="main">
      {/* Content */}
      <div className="container text-center">
        <div className="mb-4">
          <h1 className="display-1">404</h1>
          <h3 className="mb-1">Something went wrong</h3>
          <p>The page you are looking for does not exist!</p>
        </div>
        <Link className="btn btn-primary" to="./">
          Go back home
        </Link>
      </div>
      {/* End Content */}
    </main>
  );
};

export default NotFound;
