import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link, Navigate } from 'react-router-dom';



function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
    const logoutHandler = () => {
      localStorage.removeItem('token');
      Navigate('/');
    };

    return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='Home'><img src='/image/J284-1_.jpb-removebg-preview.png' className='title-nav'/></MDBNavbarBrand>
  
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/Home'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/Piece'>
                Piece de Rechange
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/Repair'>
                How To Repair
              </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/AppsAndPro'>
              Application & Programs
              </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/DashboardAdmin'>
                Admin
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
            <MDBNavbarItem>
            <MDBNavbarLink href='/'>
            <img className='logOut' src='/image/2767155.png'/>
            </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }


export default NavBar