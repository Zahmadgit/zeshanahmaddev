import styles from "./RightTabContent.module.css";

interface contentTabProps {
  content: string;
}

const RightTabContent = (props: contentTabProps) => {
  return (
    <div>
      <div className={styles.codebarContainer}>{props.content}</div>
    </div>
  );
};

export default RightTabContent;
