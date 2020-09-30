// 

import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

const Navbar = props => {

  return (
    //<Consumer>
//     {({ state, ...context }) => (
//       state.currentUser ?
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a>Logout</a></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Create Account</Link></li>
        </ul>)
    // )}
//   </Consumer>
};

export default Navbar;





// <Consumer>
//     {({ state, ...context }) => (
//       state.currentUser ?
//         <ul>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><a>Logout</a></li>
//         </ul>
//         :
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/signup">Create Account</Link></li>
//         </ul>
//     )}
//   </Consumer>