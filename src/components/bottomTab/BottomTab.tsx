import bell from "../../assets/bottomtab/bell.svg";
import copilot from "../../assets/bottomtab/copilot.svg";
import debugdisconnect from "../../assets/bottomtab/debugdisconnect.svg";
import error from "../../assets/bottomtab/error.svg";
import remote from "../../assets/bottomtab/remote.svg";
import sourcecontrol from "../../assets/bottomtab/sourcecontrol.svg";
import sync from "../../assets/bottomtab/sync.svg";
import warning from "../../assets/bottomtab/warning.svg";

import styles from "./BottomTab.module.css";
export default function BottomTab() {
  const lineNumber = 0;
  const columnNumber = 0;
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.divLeftContainer}>
        <div className={styles.imgRemoteContainer}>
          <img className={styles.imgAsset1} src={remote} />
        </div>
        <div className={styles.divBackgroundDefault}>
          <img className={styles.imgAsset2} src={sourcecontrol} />
        </div>
        <div className={styles.divBackgroundDefault}>
          <p className={styles.bottomTabText}>main*</p>
        </div>
        <div className={styles.divBackgroundDefault}>
          <img className={styles.imgAsset1} src={sync} />
        </div>

        <img className={styles.imgAsset3} src={debugdisconnect} />

        <img className={styles.imgAsset4} src={error} />
        <p className={styles.bottomTabText}>0</p>
        <img className={styles.imgAsset1} src={warning} />

        <p className={styles.bottomTabText}>0</p>
      </div>
      <div className={styles.divRightContainer}>
        <div className={styles.divBackgroundDefault}>
          <p className={styles.bottomTabText}>
            Ln {lineNumber}, Col {columnNumber}
          </p>
        </div>
        <div className={styles.divRightImgContainer}>
          <img className={styles.imgAsset1} src={copilot} />
          <img className={styles.imgAsset1} src={bell} />
        </div>
      </div>
    </div>
  );
}
