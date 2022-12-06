import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/pageSlice";
type Props = {};

const SideBar = (props: Props) => {
  const activePage = useSelector((state: any) => state.page);
  const dispatch = useDispatch();
  console.log(activePage);

  return (
    <div className={styles.sidebarDiv}>
      <span
        className={activePage.page == "intro" ? styles.activeList : styles.list}
        onClick={() => dispatch(setPage("intro"))}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Intro
      </span>
      <span
        className={
          activePage.page == "skills" ? styles.activeList : styles.list
        }
        onClick={() => dispatch(setPage("skills"))}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Skills
      </span>
      <span
        className={
          activePage.page == "projects" ? styles.activeList : styles.list
        }
        onClick={() => dispatch(setPage("projects"))}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Projects
      </span>
      <span
        className={
          activePage.page == "contact" ? styles.activeList : styles.list
        }
        onClick={() => dispatch(setPage("contact"))}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Contact
      </span>
    </div>
  );
};

export default SideBar;
