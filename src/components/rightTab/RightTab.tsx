import TerminalTab from "./TerminalTab";
import styles from "./RightTab.module.css";
import { useState } from "react";
import useCurrentFileState from "../../store/useCurrentFileState";
import RightTabContent from "./RightTabContent";
import RightTabTopContent from "./RightTabTopTab";

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
  const fileState = useCurrentFileState((state) => state.currentFile);
  const background = [
    "rgb(24, 24, 24)",
    "rgb(24, 24, 24)",
    "rgb(24, 24, 24)",
    "rgb(24, 24, 24)",
  ];
  const tabs = ["Home.md", "Experience.md", "Programming.md", "Project.md"];

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <RightTabTopContent tabTitle={tabs[0]} background={background[0]} />
        <div className={styles.tabDivider}></div>
        <RightTabTopContent tabTitle={tabs[1]} background={background[1]} />
        <div className={styles.tabDivider}></div>
        <RightTabTopContent tabTitle={tabs[2]} background={background[2]} />
        <div className={styles.tabDivider}></div>
        <RightTabTopContent tabTitle={tabs[3]} background={background[3]} />
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
        <div className={styles.terminalContainer}>
          <TerminalTab />
        </div>
      </div>
    </div>
  );
}
