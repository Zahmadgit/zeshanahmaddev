import React from "react";
import styles from "./RightTabContent.module.css";
import type { contentTabProps } from "../../types/middleTabTypes";

const RightTabContent: React.FC<contentTabProps> = ({ title, text }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.textContainer}>
        <div className={styles.codebarContainer}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default RightTabContent;
