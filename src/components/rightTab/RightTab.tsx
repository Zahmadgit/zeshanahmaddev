import TerminalTab from "./TerminalTab";
import styles from "./RightTab.module.css";
import { useState, useRef } from "react";
import useCurrentFileState from "../../store/useCurrentFileState";
import RightTabContent from "./RightTabContent";
import circleinfoPath from "../../assets/icons/circleinfo.svg";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibu" +
  "s ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." +
  "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum" +
  "egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class " +
  "aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." +
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibu" +
  "s ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." +
  "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum" +
  "egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class " +
  "aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." +
  "s ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." +
  "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum" +
  "egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class " +
  "aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." +
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibu" +
  "s ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." +
  "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum" +
  "egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class " +
  "aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." +
  "s ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." +
  "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum" +
  "egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class " +
  "aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." +
  "s ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." +
  "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum" +
  "egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class " +
  "aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." +
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibu";

const columnNumbers = Array.from({ length: 60 }, (_, i) => i + 1);

export default function RightTab() {
  const [terminalHeight, setTerminalHeight] = useState<number>(150);
  const fileState = useCurrentFileState((state) => state.currentFile);
  const changeFile = useCurrentFileState((state) => state.changeFile);

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <div className={styles.focusedTabContainer}>
          <div className={styles.tabAlignment}>
            <img className={styles.logos} src={circleinfoPath} />
            <p>Home.md</p>
          </div>
        </div>
        <div className={styles.tabDivider}></div>
        <div className={styles.focusedTabContainer}>
          <div className={styles.tabAlignment}>
            <img className={styles.logos} src={circleinfoPath} />
            <p>Experience.md</p>
          </div>
        </div>
        <div className={styles.tabDivider}></div>
        <div className={styles.focusedTabContainer}>
          <div className={styles.tabAlignment}>
            <img className={styles.logos} src={circleinfoPath} />
            <p>Programming.md</p>
          </div>
        </div>
        <div className={styles.tabDivider}></div>
        <div className={styles.focusedTabContainer}>
          <div className={styles.tabAlignment}>
            <img className={styles.logos} src={circleinfoPath} />
            <p>Projects.md</p>
          </div>
        </div>
        <div className={styles.tabDivider}></div>
      </div>

      <div className={styles.rightTabContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.numberContainer}>
            {columnNumbers.map((number) => (
              <div key={number}>
                <p className={styles.numbers}>{number}</p>
              </div>
            ))}
          </div>
          <div className={styles.numberAndTextDivider}></div>
          <RightTabContent content={lorem} />
        </div>
        <div
          className={styles.terminalContainer}
          style={{ height: terminalHeight }}
        >
          <TerminalTab />
        </div>
      </div>
    </div>
  );
}
