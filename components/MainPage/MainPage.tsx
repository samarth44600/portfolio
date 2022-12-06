import React from "react";
import styles from "./MainPage.module.scss";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className={styles.mainPage}>
      <Body />
      <SideBar />
    </div>
  );
};

export default MainPage;
