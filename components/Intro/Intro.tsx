import React from "react";
import styles from "./Intro.module.scss";
type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={styles.introDiv}>
      <span className={styles.normalText}>Hi There!</span>
      <span className={styles.specialText}>
        <span className={styles.smallText}>I am</span>&nbsp;
        <span className={styles.bigText}>Samarth</span>
      </span>
      <span className={styles.normalText}>and I Develop Websites.</span>
    </div>
  );
};

export default Intro;
