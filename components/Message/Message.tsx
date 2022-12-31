import React from "react";
import ScrollableLetter from "../ScrollableLetter/ScrollableLetter";
import styles from "./Message.module.scss";
type Props = {};

const Message = (props: Props) => {
  return (
    <div>
      <ScrollableLetter letter="Hello" />
    </div>
  );
};

export default Message;
