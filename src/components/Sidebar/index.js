import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          {/* <SidebarLink to='skills' onClick={toggle}>
            Skills
          </SidebarLink> */}
          <SidebarLink to='projects' onClick={toggle}>
            Projects
          </SidebarLink>
        </SidebarMenu>
        {/* Delete Sign In Btn
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar
