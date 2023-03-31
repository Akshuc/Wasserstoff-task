import React from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <input className={styles.searchbar} type="search" />
        <button type="submit" className={styles.buttonIcon}>
            <img src={require("../../assets/Search.png")} alt=""  width="25px"/>
        </button>
      </div>
    </>
  );
};

export default SearchBar;