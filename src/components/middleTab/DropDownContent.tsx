import { useState } from "react";
import useCurrentFileState from "../../store/useCurrentFileState";
import styles from "./DropDownContent.module.css";
import chevrondownPath from "../../assets/icons/graychevrondown.svg";
import chevronrightPath from "../../assets/icons/graychevronright.svg";

export interface FolderItem {
  text: string;
  logo: string;
}

interface folderStructure {
  folderName: string;
  folderContent: FolderItem[];
}

const DropDownContent = (props: folderStructure) => {
  const [folderOpenBool, setFolderOpenBool] = useState(false);
  const changeFile = useCurrentFileState((state) => state.changeFile);
  return (
    <div className={styles.dropdownContainer}>
      {folderOpenBool ? (
        <div>
          <div className={styles.buttonContainer}>
            <div
              onClick={() => {
                setFolderOpenBool((prev) => !prev);
              }}
            >
              <div className={styles.buttonFlex}>
                <img className={styles.chevronZeshan} src={chevrondownPath} />
                <p>{props.folderName}</p>
              </div>
            </div>
          </div>
          {props.folderContent.map((item) => (
            <div key={item.text}>
              <div className={styles.dropDownRowFlex}>
                <div className={styles.lineBracket} />
                <img className={styles.reactLogo} src={item.logo} />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className={styles.buttonContainer}>
            <div
              onClick={() => {
                setFolderOpenBool((prev) => !prev);
              }}
            >
              <div className={styles.buttonFlex}>
                <img className={styles.chevronZeshan} src={chevronrightPath} />
                <p>{props.folderName}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownContent;
