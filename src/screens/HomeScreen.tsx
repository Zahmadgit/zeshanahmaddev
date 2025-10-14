import { useState } from "react";
import LeftTab from "../components/leftTab/LeftTab";
import MiddleTab from "../components/middleTab/MiddleTab";
import RightTab from "../components/rightTab/RightTab";
import styles from "./HomeScreen.module.css";
import BottomTab from "../components/bottomTab/BottomTab";
import { FileHighlightContext } from "../utils/contexts/FileHighlightContext";

export default function HomeScreen() {
  const [currentFileHighlight, setCurrentFileHighLight] =
    useState<string>("resume");
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftTab />
      </div>
      <FileHighlightContext value={currentFileHighlight}>
        <div className={styles.middle}>
          <MiddleTab />
        </div>
        <div className={styles.right}>
          <RightTab />
        </div>
      </FileHighlightContext>
      <div className={styles.bottom}>
        <BottomTab />
      </div>
    </div>
  );
}
