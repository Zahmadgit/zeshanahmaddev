import styles from "./MiddleTab.module.css";

import ExplorerZeshanDev from "./ExplorerZeshanDev";

export default function MiddleTab() {
  return (
    <div className={styles.middleTabContainer}>
      <ExplorerZeshanDev />
    </div>
  );
}
