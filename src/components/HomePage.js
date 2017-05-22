import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className = "jumbotron">
      <h1>Home Page</h1>
      <p>Watch jobs overview page 
        <Link to="Jobs" className="btn btn-primary btn-lg">here</Link>
        </p>
    </div>
  );
};

export default HomePage;