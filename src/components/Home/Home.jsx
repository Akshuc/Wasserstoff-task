import React from "react";
import Allusers from "../../Utilities/Allusers/Allusers";
import Category from "../../Utilities/Category/Category";
import CirculerBar from "../Charts/CirculerBar";
import Column from "../Charts/Column";
import WorldMap from "../Charts/WorldMap";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sales from "../Sales/Sales";

function Home() {
  const [open, setOpen] = React.useState(false);
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = (event) => {
    // setOpen(false);
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  };

  return (
    <>
      <Navbar />
      <section className={styles.homepage} onClick={handleClose}>
        <div className={styles.title}>WSTF FRONT-END HACKATHON</div>
        <Allusers />
        <Category />
        <div className={styles.circulerbar}>
          <CirculerBar name="Active users" value="123456" percent="75" color="#023AFF" />
          <CirculerBar name="New users" value="123456" percent="67" color="#00B929" />
        </div>
        <div className={styles.columnchart}>
          <div
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              paddingLeft: "30px",
              width: "10%",
              textAlign: "left",
            }}
          >
            <p onClick={handleClose} style={{ cursor: "pointer" }}>Sales Figures</p>
            {open && <Sales />}
            <h5>$10,430</h5>
          </div>
          <div style={{ width: "90%" }}>
            <Column />
          </div>
        </div>
        <section className={styles.worldmap}>
          <WorldMap />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Home;