import LeftTab from "../components/leftTab/LeftTab";
import MiddleTab from "../components/middleTab/MiddleTab";
import RightTab from "../components/rightTab/RightTab";
import styles from "./HomeScreen.module.css";
import BottomTab from "../components/bottomTab/BottomTab";
export default function HomeScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftTab />
      </div>

      <div className={styles.middle}>
        <MiddleTab />
      </div>
      <div className={styles.right}>
        <RightTab />
      </div>
      <div className={styles.bottom}>
        <BottomTab />
      </div>
    </div>
  );
}
