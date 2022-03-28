import React from 'react';
import './Navbar.css';
import * as ReactStrap from 'reactstrap';

function Navbar() {
  // const navLinks = [
  //   { name: 'drop file', link: 'drop' },
  //   { name: 'view files', link: '/' },
  // ];
  // const [isOpen, toggleOpen] = useState(false);

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
          <ReactStrap.NavLink className="special" href="/signin">
            {/* {props.authed && <CustomSignOut />} */}
            login
          </ReactStrap.NavLink>
        </ReactStrap.Nav>
      </ReactStrap.Navbar>
    </div>
  );
}

export default Navbar;
