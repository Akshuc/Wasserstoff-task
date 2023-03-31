import React from 'react';
import styles from "./IndicatorTable.module.css"

const IndicatorTable = () => {
  return (
    <div className={styles.indicators}>
      <div className={styles.states}>
      <p>Travel</p>
      <p>2,540</p>
      <img src={require("../../assets/arrow.png")} alt='arrow'/>
      </div>
      <div className={styles.states}>
      <p>Presentation</p>
      <p>2,540</p>
      <img src={require("../../assets/arro.png")} alt='arrow'/>
      </div>
    </div>
  )
}

export default IndicatorTable