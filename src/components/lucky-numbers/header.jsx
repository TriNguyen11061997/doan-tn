import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Button from 'reactstrap/lib/Button';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // <div>
    //   <div className="game__header container-fluid">
    //     <div className="game__header__logo">
    //       <img src="/assets/imgs/logo.png" alt="" />
    //       <p>TNTBANKING</p>
    //     </div>
    //     <Navbar tabs>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon1.png" alt="" />
    //           <h6>HOME</h6>
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon2.png" alt="" />
    //           <h6>DICE</h6>
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon3.png" alt="" />
    //           <h6>WATCH</h6>
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon4.png" alt="" />
    //           <h6>DUEL</h6>
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon5.png" alt="" />
    //           <h6 className="h6_white">DIVIDEND</h6>
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon6.png" alt="" />
    //           <h6 className="h6_white">USER</h6>
    //         </NavLink>
    //       </NavItem>
    //       <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
    //         <DropdownToggle nav caret>
    //           <img src="/assets/imgs/hd-top-icon7.png" alt="" />
    //           <h6 className="h6_white">HELP</h6>
    //         </DropdownToggle>
    //         <DropdownMenu>
    //           <DropdownItem>Action</DropdownItem>
    //           <DropdownItem>Another Action</DropdownItem>
    //           <DropdownItem>Another Action</DropdownItem>
    //         </DropdownMenu>
    //       </Dropdown>
    //       <NavItem>
    //         <NavLink href="#">
    //           <img src="/assets/imgs/hd-top-icon8.png" alt="" />
    //           <h6 className="h6_white">CONTACT</h6>
    //         </NavLink>
    //       </NavItem>
    //     </Navbar>


    //     <div className="game__header__register">
    //       <div>
    //         <Button><span>Register</span></Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid">
      <Navbar light expand="md">
        <NavbarBrand>
          <div className="game__header__logo">
            <img src="/assets/imgs/logo.png" alt="" />
            <p>TNTBANKING</p>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img src="/assets/imgs/hd-top-icon7.png" alt="" />
                <h6 className="h6_white">HELP</h6>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="game__header__register">
            <div>
              <Button><span>Register</span></Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Header;