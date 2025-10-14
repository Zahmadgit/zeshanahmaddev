import TerminalTab from "./TerminalTab";
import styles from "./RightTab.module.css";
import { useState, useRef, useEffect } from "react";
import useCurrentFileState from "../../store/useCurrentFileState";

export default function RightTab() {
  const [terminalHeight, setTerminalHeight] = useState<number>(200);
  const fileState = useCurrentFileState((state) => state.currentFile);
  const changeFile = useCurrentFileState((state) => state.changeFile);
  const containerRef = useRef<HTMLDivElement>(null);
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
  for (let i = 1; i < 100; i++) {
    columnNumbers.push(i);
  }
  return (
    <div className={styles.rightTabContainer} ref={containerRef}>
      <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
        <div>
          {columnNumbers.map((number) => (
            <div key={number}>
              <p>{number}</p>
            </div>
          ))}
        </div>
        <div className={styles.codebarContainer}>
          Right
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
