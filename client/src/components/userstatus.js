import React from 'react';
import { NavDropdown, Image } from 'react-bootstrap';
import userIcon from '../images/user-icon.png';
import { useLogout } from './auth/useLogin';
import { useNavigate } from 'react-router-dom';

function UserStatus() {
  const {getLogout} = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    getLogout();
    navigate('/');
  }
  return (
    <NavDropdown title={<Image src={userIcon} roundedCircle width={30} />} align="end" className="mr-3">
      <NavDropdown.Item>Edit Profile</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
    </NavDropdown>
  );
}

export default UserStatus;
