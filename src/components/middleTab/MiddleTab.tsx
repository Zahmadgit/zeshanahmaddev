import styles from "./MiddleTab.module.css";
import React, { useState, useRef, useEffect } from "react";

interface FolderType {
  folderName?: string;
  folderOpen?: boolean;
  folderContent?: (string | FolderType)[];
  fileName?: string;
}

const fileStructure: FolderType[] = [
  {
    folderName: "node_modules",
    folderOpen: false,
    folderContent: ["react", "typescript"],
  },
  {
    folderName: "src",
    folderOpen: false,
    folderContent: [
      {
        folderName: "assets",
        folderOpen: false,
        folderContent: ["image1", "image2", "image3"],
      },
      {
        folderName: "components",
        folderOpen: false,
        folderContent: [
          { fileName: "leftTab.tsx" },
          { fileName: "middleTab.tsx" },
          { fileName: "rightTab.tsx" },
        ],
      },
      {
        folderName: "screens",
        folderOpen: false,
        folderContent: [
          { fileName: "HomeScreen.tsx" },
          { fileName: "AboutScreen.tsx" },
          { fileName: "ResumeScreen.tsx" },
        ],
      },
      {
        folderName: "utils",
        folderOpen: false,
        folderContent: [
          {
            folderName: "contexts",
            folderOpen: false,
            folderContent: [{ fileName: "FileHighlightContext.ts" }],
          },
        ],
      },
      {
        fileName: "App.tsx",
      },
    ],
  },
  {
    fileName: "index.html",
  },
  {
    fileName: "package-lock.json",
  },
  {
    fileName: "package.json",
  },
  {
    fileName: "README.md",
  },
  {
    fileName: "tsconfig.json",
  },
];

const RenderFolderStructure: React.FC<{ folder: FolderType }> = ({
  folder,
}) => {
  const [folderStructure] = useState(folder);
  //lets map the array and return an opened and unopened state for each folderName field

  // const dropDownNormalizer = (index) => {
  //   setFolderStructure((prev)=> prev.map((item, i)=> i !== index ? (): item))
  // };

  return (
    <div>
      {folderStructure.folderName && (
        <p style={{ fontSize: 14 }}>
          {" "}
          {`>`} {folderStructure.folderName}
        </p>
      )}
      {folderStructure.folderOpen === true ? (
        <p style={{ fontSize: 14 }}> {folderStructure.fileName}</p>
      ) : (
        folderStructure.folderContent?.map((item) => {
          if (typeof item === "string") {
            return (
              <div key={item}>
                <p style={{ fontSize: 10 }}>{item}</p>
              </div>
            );
          } else {
            return (
              <RenderFolderStructure key={item.folderName} folder={item} />
            );
          }
        })
      )}
      {/* {folderStructure.folderContent?.map((item) => {
        if (typeof item === "string") {
          return (
            <div key={item}>
              <p style={{ fontSize: 10 }}>{item}</p>
            </div>
          );
        } else {
          return <RenderFolderStructure key={item.folderName} folder={item} />;
        }
      })} */}
    </div>
  );
};

export default function MiddleTab() {
  const [middleWidth, setMiddleWidth] = useState<number>(150);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      //ref needs to exist
      if (!containerRef.current) {
        return;
      }
      const rectangleSize = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rectangleSize.left;
      if (newWidth > 150 && newWidth < 500) {
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
        <div>
          {fileStructure.map((item) => (
            <RenderFolderStructure key={item.folderName} folder={item} />
          ))}
        </div>
      </div>
      <div className={styles.resizeHandle}></div>
    </div>
  );
}
