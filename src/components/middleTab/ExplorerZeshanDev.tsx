import { useState } from "react";
import chevrondownPath from "../../assets/icons/chevrondown.svg";
import chevronrightPath from "../../assets/icons/chevronright.svg";
import ellipsisPath from "../../assets/terminal/ellipsis.svg";
import styles from "./ExploreZeshanDev.module.css";
import DropDownContent from "./DropDownContent";
import type { FolderItem } from "./DropDownContent";
const languages: FolderItem[] = [
  {
    text: "javascript",
    logo: "src/assets/icons/javascript.svg",
  },
  {
    text: "typescript",
    logo: "src/assets/icons/typescript.svg",
  },
  {
    text: "java",
    logo: "src/assets/icons/java.svg",
  },
  {
    text: "kotlin",
    logo: "src/assets/icons/kotlin.svg",
  },
  {
    text: "swift",
    logo: "src/assets/icons/swift.svg",
  },
];

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

          <DropDownContent folderName={"languages"} folderContent={languages} />
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
