import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import ChartBar from "../../components/Chart";

const Chart = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <ChartBar />
        </div>
      </div>
    </>
  );
};

export default Chart;
