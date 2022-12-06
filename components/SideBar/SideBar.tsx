import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/pageSlice";
import Link from "next/link";
type Props = {};

const SideBar = (props: Props) => {
  const activePage = useSelector((state: any) => state.page);
  const dispatch = useDispatch();
  console.log(activePage);

  return (
    <div className={styles.sidebarDiv}>
      <Link href="/">
        <span
          className={
            activePage.page == "intro" ? styles.activeList : styles.list
          }
          onClick={() => dispatch(setPage("intro"))}
        >
          <Icon className={styles.activeDot} icon="mdi:dot" />
          Intro
        </span>
      </Link>
      <Link href="#skills">
        <span
          className={
            activePage.page == "skills" ? styles.activeList : styles.list
          }
          onClick={() => dispatch(setPage("skills"))}
        >
          <Icon className={styles.activeDot} icon="mdi:dot" />
          Skills
        </span>
      </Link>
      <Link href="#projects">
        <span
          className={
            activePage.page == "projects" ? styles.activeList : styles.list
          }
          onClick={() => dispatch(setPage("projects"))}
        >
          <Icon className={styles.activeDot} icon="mdi:dot" />
          Projects
        </span>
      </Link>
      <Link href="#contact">
        <span
          className={
            activePage.page == "contact" ? styles.activeList : styles.list
          }
          onClick={() => dispatch(setPage("contact"))}
        >
          <Icon className={styles.activeDot} icon="mdi:dot" />
          Contact
        </span>
      </Link>
    </div>
  );
};

export default SideBar;
