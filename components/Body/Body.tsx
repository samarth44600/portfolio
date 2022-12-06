import React from "react";
import styles from "./Body.module.scss";
type Props = {};

const Body = (props: Props) => {
  return (
    <div className={styles.bodyDiv}>
      <h1>Body</h1>
    </div>
  );
};

export default Body;
