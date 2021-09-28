import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Susana Marquina</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='home' 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to='skills'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {' '}
                Skills
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {' '}
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* Delete NavBtn, imports, and NavBarElements Later
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
