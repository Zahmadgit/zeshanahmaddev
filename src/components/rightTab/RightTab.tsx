import TerminalTab from "./TerminalTab";
import styles from "./RightTab.module.css";
import { useState, useRef, useEffect } from "react";
import useCurrentFileState from "../../store/useCurrentFileState";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

export default function RightTab() {
  const [terminalHeight, setTerminalHeight] = useState<number>(200);
  const fileState = useCurrentFileState((state) => state.currentFile);
  const changeFile = useCurrentFileState((state) => state.changeFile);
  const containerRef = useRef<HTMLDivElement>(null);

  const rightTabNumAmount = useRef(45);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      //ref needs to exist
      if (!containerRef.current) {
        return;
      }
      const rectangleSize = containerRef.current.getBoundingClientRect();
      const newHeight = rectangleSize.bottom - e.clientY;

      if (newHeight > 100 && newHeight < rectangleSize.height * 0.7) {
        setTerminalHeight(newHeight);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const resizeHandle = containerRef.current?.querySelector(
      `.${styles.resizeHandle}`
    );
    resizeHandle?.addEventListener("mousedown", handleMouseDown);

    return () => {
      resizeHandle?.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const columnNumbers = [];
  for (let i = 1; i < rightTabNumAmount.current; i++) {
    columnNumbers.push(i);
  }
  return (
    <div className={styles.rightTabContainer} ref={containerRef}>
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div style={{ maxHeight: 10, textOverflow: "clip" }}>
          {columnNumbers.map((number) => (
            <div key={number}>
              <p className={styles.numbers}>{number}</p>
            </div>
          ))}
        </div>
        <div className={styles.numberAndTextDivider}></div>
        <div className={styles.codebarContainer}>
          {lorem}
          <p>{fileState}</p>
          <button
            type="button"
            onClick={() => {
              changeFile("bruh");
            }}
          >
            Change the file State to Bruh
          </button>
        </div>
      </div>
      <div className={styles.resizeHandle}></div>
      <div
        className={styles.terminalContainer}
        style={{ height: terminalHeight }}
      >
        <TerminalTab />
      </div>
    </div>
  );
}
