import styles from "./MiddleTab.module.css";
import { useState, useRef, useEffect } from "react";
export default function MiddleTab() {
  const [middleWidth, setMiddleWidth] = useState<number>(200);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      //ref needs to exist
      if (!containerRef.current) {
        return;
      }
      const rectangleSize = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rectangleSize.left;
      if (newWidth > 100 && newWidth < 500) {
        setMiddleWidth(newWidth);
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
    <div className={styles.middleTabContainer} ref={containerRef}>
      <div className={styles.middleContent} style={{ width: middleWidth }}>
        Middle Tab
      </div>
      <div className={styles.resizeHandle}></div>
    </div>
  );
}
