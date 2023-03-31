// import { green } from '@mui/material/colors';
import React from "react";
import IndicatorTable from "../../Utilities/IndicatoerTable/IndicatorTable";
import TotalEarning from "../../Utilities/TotalEarning/TotalEarning";
import DisplayLable from "../Charts/DisplayLable";
// import LineChart from '../Charts/LineChart';
// import MultiRedialCircle from '../Charts/MultiRedialCircle';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <>
      <Navbar />
      <div className={styles.dashboardcontainer}>
        <section className={styles.dashboardcharts}>
          <h2>Design faster</h2>
          <TotalEarning />
          <div className={styles.earningstate}>
            <p>Total earning</p>
            <h2>
              $12,875{" "}
              <span style={{ color: "green", fontSize: "15px" }}>%2</span>
            </h2>
            <p style={{ fontSize: "12px", opacity: "60%" }}>
              Compared to $21,504 last year
            </p>
            <hr style={{height: "3px"}} />
            <p>Sales</p>
            <h2>
              $12,875{" "}
              <span style={{ color: "green", fontSize: "15px" }}>%2</span>
            </h2>
            <p style={{ fontSize: "12px", opacity: "60%" }}>
              Compared to $21,504 last year
            </p>
          </div>
          <div>
            <IndicatorTable />
          </div>
        </section>
        <section className={styles.bubblechart}>
          <DisplayLable/>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
