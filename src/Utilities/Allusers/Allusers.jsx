import React from 'react'
import styles from './Allusers.module.css'
import UserData from '.././UsersData/UserData';

const Allusers = () => {
  return (
    <>
    <div className={styles.alluserscard}>
        <section className={styles.users}>
            <span className={styles.allusers}>All User</span>
            <span className={styles.allusersdetails}>
                DETAIL
            </span>
            <img src={require("../../assets/Icon.png")} alt='logo' />
        </section>
        <section className={styles.totalusers}>
            {UserData[0].All}
        </section>
    </div>
  </>
  )

}

export default Allusers