import terminal from "../../assets/terminal/terminal.svg";
import useCommitHistroyQuery from "../../api/useCommitHistoryQuery";
import styles from "../rightTab/TerminalTab.module.css";
export default function TerminalTab() {
  const { data, isPending, error } = useCommitHistroyQuery();
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
        {data?.data.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
      {isPending ? <p>Loading Commits...</p> : <></>}
      {error ? <p>Error fetching Commit History...</p> : <></>}
    </div>
  );
}
