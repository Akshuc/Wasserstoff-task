import React from 'react';
import styles from './Colorbox.module.css'

const Colorbox = (props) => {
  console.log(props.colors)
  return (
      <div className={styles.colorbox}>
          {/* <img src='#' alt='logo' /> */}
      </div>
  )
}

export default Colorbox