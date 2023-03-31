import React from 'react'
import LineChart from '../../components/Charts/LineChart'
import MultiRedialCircle from '../../components/Charts/MultiRedialCircle'
import styles from './TotalEarning.module.css'

const TotalEarning = () => {
  return (
    <div className={styles.circularbar}>
    <div className={styles.multicircular}>
    <MultiRedialCircle />
    </div>
    <p>Total earning</p>
    <h2>$12,875 <span style={{color: "green", fontSize: "15px"}}>%2</span></h2>
    <p style={{fontSize: "12px", opacity: "60%"}}>Compared to $21,504 last year</p>
    <div className={styles.linecharts}>
      <p>Presentation</p>
      <div>862</div>
      <div> <LineChart /></div>
    </div>
    <div className={styles.linecharts}>
      <p>Presentation</p>
      <div>862</div>
      <div> <LineChart /></div>
    </div>
    <div className={styles.linecharts}>
      <p>Presentation</p>
      <div>862</div>
      <div> <LineChart /></div>
    </div>
  </div>
  )
}

export default TotalEarning