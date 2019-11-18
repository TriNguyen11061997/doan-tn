import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="lucky-number">
      <div className="lucky-number__header container-fluid">
        <div className="lucky-number__header__logo">
          <img src="/assets/imgs/logo.png" alt="" />
          <p>TNTBANKING</p>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon1.png" alt="" />
              <h6>HOME</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon2.png" alt="" />
              <h6>DICE</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon3.png" alt="" />
              <h6>WATCH</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon4.png" alt="" />
              <h6>DUEL</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon5.png" alt="" />
              <h6 className="h6_white">DIVIDEND</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon6.png" alt="" />
              <h6 className="h6_white">USER</h6>
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              <img src="/assets/imgs/hd-top-icon7.png" alt="" />
              <h6 className="h6_white">HELP</h6>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">
              <img src="/assets/imgs/hd-top-icon8.png" alt="" />
              <h6 className="h6_white">CONTACT</h6>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="lucky-number__header__register">
          <div>
            <Button><span>Register</span></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;