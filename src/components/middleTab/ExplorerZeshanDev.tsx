import { useState } from "react";
import chevrondownPath from "../../assets/icons/chevrondown.svg";
import chevronrightPath from "../../assets/icons/chevronright.svg";
import ellipsisPath from "../../assets/terminal/ellipsis.svg";
import styles from "./ExploreZeshanDev.module.css";
import DropDownContent from "./DropDownContent";
import type { FolderItem } from "./DropDownContent";
const languages: FolderItem[] = [
  {
    text: "Javascript",
    logo: "src/assets/icons/javascript.svg",
  },
  {
    text: "Typescript",
    logo: "src/assets/icons/typescript.svg",
  },
  {
    text: "Java",
    logo: "src/assets/icons/java.svg",
  },
  {
    text: "Kotlin",
    logo: "src/assets/icons/kotlin.svg",
  },
  {
    text: "Swift",
    logo: "src/assets/icons/swift.svg",
  },
];

const frameworks: FolderItem[] = [
  {
    text: "React",
    logo: "src/assets/icons/react.svg",
  },
  {
    text: "ReactNative",
    logo: "src/assets/icons/react.svg",
  },
  {
    text: "NodeJS",
    logo: "src/assets/icons/nodejs.svg",
  },
  {
    text: "NextJS",
    logo: "src/assets/icons/nextjs.svg",
  },
  {
    text: "Expo",
    logo: "src/assets/icons/expo.svg",
  },
  {
    text: "Tailwind",
    logo: "src/assets/icons/tailwind.svg",
  },
];

const styling: FolderItem[] = [
  {
    text: "CSS3",
    logo: "src/assets/icons/css.svg",
  },
  {
    text: "HTML5",
    logo: "src/assets/icons/html.svg",
  },
  {
    text: "MaterialUI",
    logo: "src/assets/icons/materialUI.svg",
  },
  {
    text: "Tailwind",
    logo: "src/assets/icons/tailwind.svg",
  },
];
const versioningCloud: FolderItem[] = [
  {
    text: "AzureDevOps",
    logo: "src/assets/icons/azure.svg",
  },
  {
    text: "AWS",
    logo: "src/assets/icons/aws.svg",
  },

  {
    text: "Git",
    logo: "src/assets/icons/git.svg",
  },

  {
    text: "Docker",
    logo: "src/assets/icons/docker.svg",
  },
];

const testingPerformance: FolderItem[] = [
  {
    text: "Jest",
    logo: "src/assets/icons/jest.svg",
  },
  {
    text: "Vitest",
    logo: "src/assets/icons/vitest.svg",
  },
  {
    text: "RTL",
    logo: "src/assets/icons/reacttestinglibrary.png",
  },
  {
    text: "Storybook",
    logo: "src/assets/icons/storybook.svg",
  },
  {
    text: "Lighthouse",
    logo: "src/assets/icons/lighthouse.svg",
  },
  {
    text: "Xcode",
    logo: "src/assets/icons/xcode.png",
  },
  {
    text: "AndroidStudio",
    logo: "src/assets/icons/androidstudio.png",
  },
];

const databases: FolderItem[] = [
  {
    text: "PostgreSQL",
    logo: "src/assets/icons/postgres.svg",
  },
  {
    text: "MySQL",
    logo: "src/assets/icons/mysql.png",
  },

  {
    text: "MongoDB",
    logo: "src/assets/icons/mongo.png",
  },
  {
    text: "Firestore",
    logo: "src/assets/icons/firestore.svg",
  },
];
const ExplorerZeshanDev = () => {
  const [folderOpenBool, setFolderOpenBool] = useState(false);
  return (
    <div>
      <div className={styles.explorerContainer}>
        <p className={styles.explorer}>EXPLORER</p>
        <img className={styles.ellipsis} src={ellipsisPath} />
      </div>
      {folderOpenBool ? (
        <div>
          <div
            className={styles.zeshanContainer}
            onClick={() => {
              setFolderOpenBool((prev) => !prev);
            }}
          >
            <img className={styles.chevronZeshan} src={chevrondownPath} />
            <p className={styles.zeshanText}>ZESHANAHAMDDEV</p>
          </div>

          <DropDownContent folderName={"languages"} folderContent={languages} />
          <DropDownContent
            folderName={"frameworks+react"}
            folderContent={frameworks}
          />
          <DropDownContent folderName={"styling"} folderContent={styling} />
          <DropDownContent
            folderName={"versioning/cloud"}
            folderContent={versioningCloud}
          />
          <DropDownContent
            folderName={"testing/performance"}
            folderContent={testingPerformance}
          />

          <DropDownContent folderName={"databases"} folderContent={databases} />
        </div>
      ) : (
        <div>
          <div
            className={styles.zeshanContainer}
            onClick={() => {
              setFolderOpenBool((prev) => !prev);
            }}
          >
            <img className={styles.chevronZeshan} src={chevronrightPath} />
            <p className={styles.zeshanText}>ZESHANAHAMDDEV</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorerZeshanDev;
