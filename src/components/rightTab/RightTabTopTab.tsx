import circleinfoPath from "../../assets/icons/circleinfo.svg";
import styles from "./RightTab.module.css";
import useCurrentFileState from "../../store/useCurrentFileState";
interface propTabs {
  tabTitle: string;
  background: string;
}

const RightTabTopContent = (props: propTabs) => {
  const fileState = useCurrentFileState((state) => state.currentFile);
  const changeFile = useCurrentFileState((state) => state.changeFile);

  return (
    <div
      onClick={() => {
        changeFile(props.tabTitle);
      }}
      className={styles.focusedTabContainer}
      style={{
        background:
          fileState === props.tabTitle ? "rgb(31, 31, 31)" : props.background,
        borderTop:
          fileState === props.tabTitle ? "2px solid rgb(51, 118, 205)" : "",
      }}
    >
      <div className={styles.tabAlignment}>
        <img className={styles.logos} src={circleinfoPath} />
        <p className={styles.textColor}>{props.tabTitle}</p>
      </div>
    </div>
  );
};

export default RightTabTopContent;
