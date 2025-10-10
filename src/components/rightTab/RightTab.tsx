import TerminalTab from "./TerminalTab";
import styles from "./RightTab.module.css";
import { useState, useRef, useEffect } from "react";
export default function RightTab() {
  const [terminalHeight, setTerminalHeight] = useState<number>(200);

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

  return (
    <div className={styles.rightTabContainer} ref={containerRef}>
      <div className={styles.codebarContainer}>Right</div>
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
