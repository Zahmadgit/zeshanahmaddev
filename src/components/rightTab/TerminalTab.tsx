import terminal from "../../assets/terminal/terminal.svg";
import useCommitHistroyQuery from "../../api/useCommitHistoryQuery";
import styles from "../rightTab/TerminalTab.module.css";
import { useEffect, useRef, useState } from "react";
import type { commitResponseStructure } from "../../types/githubApiTypes";

export default function TerminalTab() {
  const { data, isPending, error } = useCommitHistroyQuery();
  const timerIndex = useRef(0);
  const dataArray = data;
  const [dataDisplayArray, setDataDisplayArray] = useState<
    commitResponseStructure[] | undefined
  >([]);
  useEffect(() => {
    const timer = setInterval(() => {
      timerIndex.current++;
      setDataDisplayArray((prev) => [
        ...prev,
        dataArray?.data[timerIndex.current],
      ]);
      if (timerIndex.current >= 20) {
        setDataDisplayArray([dataArray?.data[0]]);
        timerIndex.current = 1;
      }
      // if (timerIndex.current >= 16) {
      //   clearInterval(timer);
      // }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dataArray]);

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalTopTabContainer}>
        <div className={styles.terminalTextContainer}>
          <p className={styles.terminalTopTabTextTerminal}>TERMINAL</p>
          <div className={styles.terminalTextUnderLine}></div>
        </div>
        <div className={styles.nodeContainer}>
          <img className={styles.terminalImage} src={terminal} />
          <p className={styles.nodeText}>node</p>
        </div>
      </div>
      <div className={styles.commitHistoryContainer}>
        {dataDisplayArray.map((item) => (
          <div key={item.id} className={styles.commitContainer}>
            <p>Date: {item.created_at} -</p>
            <p>Commit: {item.id} - </p>
            <p> Event Type: {item.type}</p>
          </div>
        ))}
      </div>
      {isPending ? <p>Loading Commits...</p> : <></>}
      {error ? <p>Error fetching Commit History...</p> : <></>}
    </div>
  );
}
