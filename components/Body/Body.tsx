import React from "react";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./Body.module.scss";
type Props = {};

const Body = (props: Props) => {
  return (
    <div className={styles.bodyDiv}>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
