import * as React from "react";
import styles from "./ScrollableLetter.module.scss";
interface ScrollableLetterProps {
  letter: string;
}

const ScrollableLetter: React.FunctionComponent<ScrollableLetterProps> = ({
  letter,
}) => {
  return <div className={styles.scrollableLetter}>{letter}</div>;
};

export default ScrollableLetter;
