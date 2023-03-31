import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from "react-router-dom";



const Menu = () => {
  return (
    <>   
    <ul>
        <li>Statistics</li>
        <li>Overview</li>
        <NavLink to="/Dashboard"><li>Dashboard</li></NavLink>
        <li>Analytics</li>
    </ul>
    </>
  )
}

export default Menu