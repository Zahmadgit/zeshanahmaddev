import chevrondo from "../../assets/terminal/chevrondown.svg";
import add from "../../assets/terminal/add.svg";
import close from "../../assets/terminal/close.svg";
import ellipsis from "../../assets/terminal/ellipsis.svg";
import splithorizontal from "../../assets/terminal/splithorizontal.svg";
import terminal from "../../assets/terminal/terminal.svg";
import trash from "../../assets/terminal/trash.svg";
import styles from "../rightTab/TerminalTab.module.css";
export default function TerminalTab() {
  return (
    <div>
      <div className={styles.terminalTopTabContainer}>
        <div>
          <p className={styles.terminalTopTabText}>PROBLEMS</p>
        </div>
        <div>
          <p className={styles.terminalTopTabText}>OUTPUT</p>
        </div>
        <div>
          <p className={styles.terminalTopTabText}>DEBUG CONSOLE</p>
        </div>
        <div>
          <p className={styles.terminalTopTabTextTerminal}>TERMINAL</p>
        </div>
        <div>
          <p className={styles.terminalTopTabText}>PORTS</p>
        </div>
        <div>
          <p className={styles.terminalTopTabText}>GITLENS</p>
        </div>
      </div>
      <img src={chevrondo} />
      <img src={add} />
      <img src={close} />
      <img src={ellipsis} />
      <img src={splithorizontal} />
      <img src={terminal} />
      <img src={trash} />
    </div>
  );
}
