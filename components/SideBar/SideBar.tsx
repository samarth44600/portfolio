import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { Icon } from "@iconify/react";

type Props = {};

const SideBar = (props: Props) => {
  const [active, setactive] = useState("intro");

  return (
    <div className={styles.sidebarDiv}>
      <span
        className={active == "intro" ? styles.activeList : styles.list}
        onClick={() => setactive("intro")}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Intro
      </span>
      <span
        className={active == "skills" ? styles.activeList : styles.list}
        onClick={() => setactive("skills")}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Skills
      </span>
      <span
        className={active == "projects" ? styles.activeList : styles.list}
        onClick={() => setactive("projects")}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Projects
      </span>
      <span
        className={active == "contact" ? styles.activeList : styles.list}
        onClick={() => setactive("contact")}
      >
        <Icon className={styles.activeDot} icon="mdi:dot" />
        Contact
      </span>
    </div>
  );
};

export default SideBar;
