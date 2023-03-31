import React from 'react';
import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
        <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <NavLink to="/"><img src={require("../../assets/Vector1.png")} alt='logo'/></NavLink>
            <p style={{paddingLeft: "10px"}}>WASSERSTOFF</p>
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
          <Menu />
        </div>
        <div className={styles.userSetting}>
          <img src={require("../../assets/Icon1.png")} alt='useserImage'/>
          <img src={require("../../assets/settings.png")} alt='settinglogo'/>
        </div>
    </nav>
    </>
  )
}

export default Navbar