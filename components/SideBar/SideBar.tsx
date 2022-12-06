import React from "react";
import styles from "./SideBar.module.scss";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className={styles.sidebarDiv}>
      <h1>SideBar</h1>
    </div>
  );
};

export default SideBar;
