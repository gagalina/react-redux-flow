import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
      <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink> 
        {" | "}  
        <Link to="/jobs" activeClassName="active">Jobs</Link>
    </nav>
  );
};

export default Header; 