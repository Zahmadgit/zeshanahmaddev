import TerminalTab from "./TerminalTab";
import styles from "./RightTab.module.css";
import useCurrentFileState from "../../store/useCurrentFileState";
import RightTabContent from "./RightTabContent";
import RightTabTopContent from "./RightTabTopTab";
import TabErrorBoundary from "../common/TabErrorBoundary";
import TerminalErrorBoundary from "../common/TerminalErrorBoundary";
//this is going to require type casting when using the values from the json file
import HomeText from "../../assets/middletabtext/Home.json";

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

          <TabErrorBoundary tabName={`File: ${fileState}`}>
            {fileState === "Home.md" ? (
              <div>
                <RightTabContent
                  title={(HomeText as { title: string; text: string }).title}
                  text={(HomeText as { title: string; text: string }).text}
                />
              </div>
            ) : (
              <div style={{ padding: "20px", color: "gray" }}>
                Content for {fileState} not available
              </div>
            )}
          </TabErrorBoundary>
        </div>
        <div className={styles.terminalContainer}>
          <TerminalErrorBoundary>
            <TerminalTab />
          </TerminalErrorBoundary>
        </div>
      </div>
    </div>
  );
}
