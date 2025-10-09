import searchIcon from "../../assets/icons/search.svg";
import sourceControlIcon from "../../assets/icons/sourcecontrol.svg";
import explorerIcon from "../../assets/icons/explorer.svg";
import debugIcon from "../../assets/icons/debug.svg";
import extensionIcon from "../../assets/icons/extensions.svg";
import accountIcon from "../../assets/icons/account.svg";
import settingIcon from "../../assets/icons/setting.svg";

import styles from "./LeftTab.module.css";
const LeftTab = () => {
  return (
    <div className={styles.imgContainer}>
      <img src={explorerIcon} className={styles.imgExplorer}></img>
      <img src={searchIcon} className={styles.imgSearch}></img>
      <img src={sourceControlIcon} className={styles.imgSourceControl}></img>
      <img src={debugIcon} className={styles.img}></img>
      <img src={extensionIcon} className={styles.img}></img>
      <img src={accountIcon} className={styles.imgAccount}></img>
      <img src={settingIcon} className={styles.img}></img>
    </div>
  );
};

export default LeftTab;
