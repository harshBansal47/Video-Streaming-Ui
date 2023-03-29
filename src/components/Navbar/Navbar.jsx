import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState('false')
  return (
    <div className={isScrolled ? `nav scroll` : "nav"}>
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt=""/>
          <span className="navbarmainLinks">Home Page</span>
          <span className="navbarmainLinks">Series</span>
          <span className="navbarmainLinks">Movies</span>
          <span className="navbarmainLinks">New and popular</span>
          <span className="navbarmainLinks">My List</span>
        </div>
        <div className="right">
          <SearchIcon className='icon'/>
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
           <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar