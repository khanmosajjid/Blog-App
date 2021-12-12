import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import { logout } from "../../features/userSlice";
import React ,{useState} from 'react'
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
  } from 'reactstrap';
import "./topbar.css";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
  const dispatch=useDispatch()
    const handleLogout=(e)=>{
        e.preventDefault();
       window.localStorage.removeItem('user')
        dispatch(logout());
        
    }
    const getData=()=>{
        let user=localStorage.getItem('user');
        user=JSON.parse(user);
       
        return user;
        
    }
    const user=getData()
  return (
    <div>
        <Navbar light expand="md">
          <NavbarBrand>Welcome <span>{user.name}</span></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="navbar-collapse">
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/write">Create Blog</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/write">
                <Button className="logout__btn" onClick={(e)=>{
                  handleLogout(e)
                }}>Logout</Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings">
                Setting
                </NavLink>
              </NavItem>
              
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}
