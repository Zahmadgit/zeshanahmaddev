import { useState } from "react";
import chevrondownPath from "../../assets/icons/chevrondown.svg";
import chevronrightPath from "../../assets/icons/chevronright.svg";
import ellipsisPath from "../../assets/terminal/ellipsis.svg";
import styles from "./ExploreZeshanDev.module.css";

const ExplorerZeshanDev = () => {
  const [folderOpenBool, setFolderOpenBool] = useState(false);
  return (
    <div>
      <div className={styles.explorerContainer}>
        <p className={styles.explorer}>EXPLORER</p>
        <img className={styles.ellipsis} src={ellipsisPath} />
      </div>
      {folderOpenBool ? (
        <div>
          <div
            className={styles.zeshanContainer}
            onClick={() => {
              setFolderOpenBool((prev) => !prev);
            }}
          >
            <img className={styles.chevronZeshan} src={chevrondownPath} />
            <p className={styles.zeshanText}>ZESHANAHAMDDEV</p>
          </div>
        </div>
      ) : (
        <div>
          <div
            className={styles.zeshanContainer}
            onClick={() => {
              setFolderOpenBool((prev) => !prev);
            }}
          >
            <img className={styles.chevronZeshan} src={chevronrightPath} />
            <p className={styles.zeshanText}>ZESHANAHAMDDEV</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorerZeshanDev;
