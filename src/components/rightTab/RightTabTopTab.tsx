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
      }}
    >
      <div className={styles.tabAlignment}>
        <img className={styles.logos} src={circleinfoPath} />
        <p>{props.tabTitle}</p>
      </div>
    </div>
  );
};

export default RightTabTopContent;
