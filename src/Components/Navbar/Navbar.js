import React from 'react';
import * as ReactStrap from 'reactstrap';
import './navbar.css';
/* eslint-disable react/prop-types */
function Navbar(props) {
  // const navLinks = [
  //   { name: 'drop file', link: 'drop' },
  //   { name: 'view files', link: '/' },
  // ];
  // const [isOpen, toggleOpen] = useState(false);
  // const { isAuthed } = props;
  const { authed } = props;
  return (
    <div className="user-nav">
      <ReactStrap.Navbar dark expand="md" variant="light">
        <ReactStrap.NavbarBrand
          className="logo d-flex align-items-end"
          href="/"
        >
          unskippables
        </ReactStrap.NavbarBrand>
        <ReactStrap.Nav className="ml-auto the-nav" navbar>

          {authed ? (
            <ReactStrap.NavLink className="special" href="/signout">
              sign out
            </ReactStrap.NavLink>
          ) : (
            <ReactStrap.NavLink className="special" href="/signin">
              login
            </ReactStrap.NavLink>
          )}

        </ReactStrap.Nav>
      </ReactStrap.Navbar>
    </div>
  );
}

export default Navbar;
