import React from 'react';
import { Nav , NavbarContainer , NavLogo, NavIcon} from './EventNavbar.element';
 
// import { Container } from './globalStyles'

const Navbar =() => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to=" /">
          <NavIcon />
          EVENT BOOKING APP
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;